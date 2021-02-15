import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import geocoder from '../utils/geocoder.js'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: 6,
    select: false
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'Please provide a gender.']
  },
  birthdate: {
    type: Date,
    required: [true, 'Provide a birthdate.']
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    zipcode: String,
    country: String
  },
  photo: {
    // u bazi podataka samo filename
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Geocode & create location field
UserSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address)

  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  }

  // Do not save address in DB because we have in location
  // this.address = undefined
  next()
})

const User = mongoose.model('User', UserSchema)

export default User
