import { Expo } from 'expo-server-sdk'

const sendPushNotification = async (targetExpoPushToken, message) => {
  const expo = new Expo()
  const chunks = expo.chunkPushNotifications([
    { to: targetExpoPushToken, sound: 'default', body: message }
  ])

  // Create the messages that you want to send to clients
  let messages = []
  for (let pushToken of somePushTokens) {
    // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

    // Check that all your push tokens appear to be valid Expo push tokens
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} is not a valid Expo push token`)
      continue
    }

    // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
    messages.push({
      to: pushToken,
      sound: 'default',
      body: 'Are you watching TV right now?',
      data: { withSome: 'data' }
    })
  }

  const sendChunks = async () => {
    // This code runs synchronously. We're waiting for each chunk to be send.
    // A better approach is to use Promise.all() and send multiple chunks in parallel.
    chunks.forEach(async (chunk) => {
      console.log('Sending Chunk', chunk)
      try {
        const tickets = await expo.sendPushNotificationsAsync(chunk)
        console.log('Tickets', tickets)
      } catch (error) {
        console.log('Error sending chunk', error)
      }
    })
  }

  await sendChunks()
}

export default { sendPushNotification }
