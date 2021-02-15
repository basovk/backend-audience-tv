const shows = [
  // TODO: HRT 1
  {
    title: 'Agenda: Svijet',
    timeStart: '00:00',
    timeEnd: '00:42',
    time: '00:00 - 00:42',
    next: '00:42 - 01:28 - Detektiv Murdoch',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Detektiv Murdoch',
    timeStart: '00:42',
    timeEnd: '01:28',
    time: '00:42 - 01:28',
    next: '01:28 - 02:10 - Dr.Oz',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dr.Oz',
    timeStart: '01:28',
    timeEnd: '02:10',
    time: '01:28 - 02:10',
    next: '02:10 - 06:30 - Vijesti iz kulture',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vijesti iz kulture',
    timeStart: '02:10',
    timeEnd: '06:30',
    time: '02:10 - 06:30',
    next: '06:30 - 09:00 - Dobro jutro, Hrvatska',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dobro jutro, Hrvatska',
    timeStart: '06:30',
    timeEnd: '09:00',
    time: '06:30 - 09:00',
    next: '09:00 - 11:00 - Vijesti',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vijesti',
    timeStart: '09:00',
    timeEnd: '11:00',
    time: '09:00 - 11:00',
    next: '11:00 - 12:00 - TV Kalendar',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'TV Kalendar',
    timeStart: '11:00',
    timeEnd: '12:00',
    time: '11:00 - 12:00',
    next: '12:00 - 12:15 - Dnevnik 1',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dnevnik 1',
    timeStart: '12:00',
    timeEnd: '12:15',
    time: '12:00 - 12:15',
    next: '12:15 - 12:20 - Sport',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Sport',
    timeStart: '12:15',
    timeEnd: '12:20',
    time: '12:15 - 12:20',
    next: '12:20 - 12:30 - Vrijeme',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vrijeme',
    timeStart: '12:20',
    timeEnd: '12:30',
    time: '12:20 - 12:30',
    next: '12:30 - 13:10 - Dr.Oz',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dr.Oz',
    timeStart: '12:30',
    timeEnd: '13:10',
    time: '12:30 - 13:10',
    next: '13:10 - 14:47 - Globalna Hrvatska HTV',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Globalna Hrvatska HTV',
    timeStart: '13:10',
    timeEnd: '14:47',
    time: '13:10 - 14:47',
    next: '14:47 - 15:07 - I to je Hrvatska: Orgulje',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'I to je Hrvatska: Orgulje',
    timeStart: '14:47',
    timeEnd: '15:07',
    time: '14:47 - 15:07',
    next: '15:07 - 16:42 - Njemački zapad odozgo',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Njemački zapad odozgo',
    timeStart: '15:07',
    timeEnd: '16:42',
    time: '15:07 - 16:42',
    next: '16:42 - 17:00 - TV Kalendar',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'TV Kalendar',
    timeStart: '16:42',
    timeEnd: '17:00',
    time: '16:42 - 17:00',
    next: '17:00 - 17:14 - Vijesti u 17',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vijesti u 17',
    timeStart: '17:00',
    timeEnd: '17:14',
    time: '17:00 - 17:14',
    next: '17:14 - 17:20 - Vrijeme',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vrijeme',
    timeStart: '17:14',
    timeEnd: '17:20',
    time: '17:14 - 17:20',
    next: '17:20 - 18:11 - Kod nas doma',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Kod nas doma',
    timeStart: '17:20',
    timeEnd: '18:11',
    time: '17:20 - 18:11',
    next: '18:11 - 19:00 - Potjera',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Potjera',
    timeStart: '18:11',
    timeEnd: '19:00',
    time: '18:11 - 19:00',
    next: '19:00 - 19:49 - Dnevnik 2',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dnevnik 2',
    timeStart: '19:00',
    timeEnd: '19:49',
    time: '19:00 - 19:49',
    next: '19:49 - 20:10 - Sport',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Sport',
    timeStart: '19:49',
    timeEnd: '20:10',
    time: '19:49 - 20:10',
    next: '20:10 - 21:04 - Whats up America',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Whats up America',
    timeStart: '20:10',
    timeEnd: '21:04',
    time: '20:10 - 21:04',
    next: '21:04 - 22:00 - Crno-bijeli svijet',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Crno-bijeli svijet',
    timeStart: '21:04',
    timeEnd: '22:00',
    time: '21:04 - 22:00',
    next: '22:00 - 22:50 - Otvoreno',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Otvoreno',
    timeStart: '22:00',
    timeEnd: '22:50',
    time: '22:00 - 22:50',
    next: '22:50 - 23:05 - Dnevnik 3',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Dnevnik 3',
    timeStart: '22:50',
    timeEnd: '23:05',
    time: '22:50 - 23:05',
    next: '23:05 - 23:40 - Vijesti iz kulture',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Vijesti iz kulture',
    timeStart: '23:05',
    timeEnd: '23:40',
    time: '23:05 - 23:40',
    next: '23:40 - 00:00 - Repriza',
    program: '600db2c0708bd653549a0a20'
  },
  {
    title: 'Repriza',
    timeStart: '23:40',
    timeEnd: '23:59',
    time: '23:40 - 00:00',
    next: '00:00 - 00:42 - Agenda: Svijet',
    program: '600db2c0708bd653549a0a20'
  },
  // TODO: HRT 2
  {
    title: 'Nezaboravljeni',
    timeStart: '00:00',
    timeEnd: '01:14',
    time: '00:00 - 01:14',
    next: '01:14 - 06:27 - Noćni glazbeni program',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Noćni glazbeni program',
    timeStart: '01:14',
    timeEnd: '06:27',
    time: '01:14 - 06:27',
    next: '06:27 - 07:55 - Juhuhu',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Juhuhu',
    timeStart: '06:27',
    timeEnd: '07:55',
    time: '06:27 - 07:55',
    next: '07:55 - 09:55 - Blitz i Bob',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Blitz i Bob',
    timeStart: '07:55',
    timeEnd: '09:50',
    time: '07:55 - 09:55',
    next: '09:50 - 11:03 - Alvin i vjeverice',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Alvin i vjeverice',
    timeStart: '09:50',
    timeEnd: '11:03',
    time: '09:50 - 11:03',
    next: '11:03 - 12:25 - Sjedni, odličan',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Sjedni, odličan',
    timeStart: '11:03',
    timeEnd: '12:25',
    time: '11:03 - 12:25',
    next: '12:25 - 13:23 - Ratni vođe: Georges Clemenceau',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Ratni vođe: Georges Clemenceau',
    timeStart: '12:25',
    timeEnd: '13:23',
    time: '12:25 - 13:23',
    next: '13:23 - 14:55 - Profesorica: Mjesto zločina',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Profesorica: Mjesto zločina',
    timeStart: '13:23',
    timeEnd: '14:55',
    time: '13:23 - 14:55',
    next: '14:55 - 16:00 - Vaš savršeni dom',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Vaš savršeni dom',
    timeStart: '14:55',
    timeEnd: '16:00',
    time: '14:55 - 16:00',
    next: '16:00 - 16:44 - Regionalni dnevnik',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Regionalni dnevnik',
    timeStart: '16:00',
    timeEnd: '16:44',
    time: '16:00 - 16:44',
    next: '16:44 - 17:32 - Divlji raj Rusije',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Divlji raj Rusije',
    timeStart: '16:44',
    timeEnd: '17:32',
    time: '16:44 - 17:32',
    next: '17:32 - 18:03 - Auto Market',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Auto Market',
    timeStart: '17:32',
    timeEnd: '18:03',
    time: '17:32 - 18:03',
    next: '18:03 - 18:20 - I to je Hrvatska: Trogir',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'I to je Hrvatska: Trogir',
    timeStart: '18:03',
    timeEnd: '18:20',
    time: '18:03 - 18:20',
    next: '18:20 - 18:52 - TV Bingo',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'TV Bingo',
    timeStart: '18:20',
    timeEnd: '18:52',
    time: '18:20 - 18:52',
    next: '18:52 - 19:29 - Alvin i vjeverice',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Alvin i vjeverice',
    timeStart: '18:52',
    timeEnd: '19:29',
    time: '18:52 - 19:29',
    next: '19:29 - 20:05 - POPROCK.HR',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'POPROCK.HR',
    timeStart: '19:29',
    timeEnd: '20:05',
    time: '19:29 - 20:05',
    next: '20:05 - 21:00 - Stadion',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Stadion',
    timeStart: '20:05',
    timeEnd: '21:00',
    time: '20:05 - 21:00',
    next: '21:00 - 22:47 - Narod protiv Fritza Bauera',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Narod protiv Fritza Bauera',
    timeStart: '21:00',
    timeEnd: '22:47',
    time: '21:00 - 22:47',
    next: '22:47 - 23:31 - Zakon i red: Odjel za žrtve',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Zakon i red: Odjel za žrtve',
    timeStart: '22:47',
    timeEnd: '23:31',
    time: '22:47 - 23:31',
    next: '23:31 - 00:00 - Posljedna truba',
    program: '600db2c0708bd653549a0a21'
  },
  {
    title: 'Posljednja truba',
    timeStart: '23:31',
    timeEnd: '23:59',
    time: '23:31 - 00:00',
    next: '00:00 - 01:14 - Nezaboravljeni',
    program: '600db2c0708bd653549a0a21'
  },
  // TODO: RTL
  {
    title: 'Mali Budo',
    timeStart: '00:00',
    timeEnd: '02:25',
    time: '00:00 - 02:25',
    next: '02:25 - 03:55 - Teška meta',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Teška meta',
    timeStart: '02:25',
    timeEnd: '03:55',
    time: '02:25 - 03:55',
    next: '03:55 - 07:40 - RTL Danas',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Danas',
    timeStart: '03:55',
    timeEnd: '07:40',
    time: '03:55 - 07:40',
    next: '07:40 - 08:05 - RTL Sport',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Sport',
    timeStart: '07:40',
    timeEnd: '08:05',
    time: '07:40 - 08:05',
    next: '08:10 - 09:00 - Top.HR',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Top.HR',
    timeStart: '08:10',
    timeEnd: '09:00',
    time: '08:10 - 09:00',
    next: '09:00 - 09:50 - Super veterinar',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Super veterinar',
    timeStart: '09:00',
    timeEnd: '09:50',
    time: '09:00 - 09:50',
    next: '09:50 - 10:05 - TV prodaja',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'TV prodaja',
    timeStart: '09:50',
    timeEnd: '10:05',
    time: '09:50 - 10:05',
    next: '10:05 - 11:15 - Super veterinar',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Super veterinar',
    timeStart: '10:05',
    timeEnd: '11:15',
    time: '10:05 - 11:15',
    next: '11:15 - 12:00 - YooHoo i prijatelji',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'YooHoo i prijatelji',
    timeStart: '11:15',
    timeEnd: '12:00',
    time: '11:15 - 12:00',
    next: '12:00 - 12:25 - Yakari',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Yakari',
    timeStart: '12:00',
    timeEnd: '12:25',
    time: '12:00 - 12:25',
    next: '12:25 - 14:50 - Istrage gospođice Fisher',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Istrage gospođice Fisher',
    timeStart: '12:25',
    timeEnd: '14:50',
    time: '12:25 - 14:50',
    next: '14:50 - 16:30 - Sedmi patuljak',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Sedmi patuljak',
    timeStart: '14:50',
    timeEnd: '16:30',
    time: '14:50 - 16:30',
    next: '16:30 - 16:45 - RTL Vijesti',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Vijesti',
    timeStart: '16:30',
    timeEnd: '16:45',
    time: '16:30 - 16:45',
    next: '16:45 - 17:55 - Vrijeme je za rukomet',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Vrijeme je za rukomet',
    timeStart: '16:45',
    timeEnd: '17:55',
    time: '16:45 - 17:55',
    next: '17:55 - 19:40 - SP u rukometu',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'SP u rukometu',
    timeStart: '17:55',
    timeEnd: '19:40',
    time: '17:55 - 19:40',
    next: '19:40 - 20:05 - RTL Danas',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Danas',
    timeStart: '19:40',
    timeEnd: '20:05',
    time: '19:40 - 20:05',
    next: '20:05 - 20:10 - RTL Sport',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Sport',
    timeStart: '20:05',
    timeEnd: '20:10',
    time: '20:05 - 20:10',
    next: '20:10 - 20:20 - RTL Vrijeme',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'RTL Vrijeme',
    timeStart: '20:10',
    timeEnd: '20:20',
    time: '20:10 - 20:20',
    next: '20:20 - 22:40 - SP u rukometu: Njemačka - Brazil',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'SP u rukometu: Njemačka - Brazil',
    timeStart: '20:20',
    timeEnd: '22:40',
    time: '20:20 - 22:40',
    next: '22:40 - 00:00 - Paranoja',
    program: '600db2c0708bd653549a0a22'
  },
  {
    title: 'Paranoja',
    timeStart: '22:40',
    timeEnd: '23:59',
    time: '22:40 - 00:00',
    next: '00:00 - 02:25 - Mali Budo',
    program: '600db2c0708bd653549a0a22'
  },
  // TODO: NOVA TV
  {
    title: 'Maskin sin',
    timeStart: '00:00',
    timeEnd: '02:40',
    time: '00:00 - 02:40',
    next: '02:40 - 05:15 - Party života',
    program: '600db2c0708bd653549a0a23'
  },

  {
    title: 'Party života',
    timeStart: '02:40',
    timeEnd: '05:15',
    time: '02:40 - 05:15',
    next: '05:15 - 05:20 - Kraj programa',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Kraj programa',
    timeStart: '05:15',
    timeEnd: '05:20',
    time: '05:15 - 05:20',
    next: '05:20 - 05:40 - Dnevnik Nove TV',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Dnevnik Nove TV',
    timeStart: '05:20',
    timeEnd: '05:40',
    time: '05:20 - 05:40',
    next: '05:40 - 06:25 - Aladdin',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Aladdin',
    timeStart: '05:40',
    timeEnd: '06:25',
    time: '05:40 - 06:25',
    next: '06:25 - 07:30 - Stella',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Stella',
    timeStart: '06:25',
    timeEnd: '07:30',
    time: '06:25 - 07:30',
    next: '07:30 - 08:35 - Elena od Avalora',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Elena od Avalora',
    timeStart: '07:30',
    timeEnd: '08:35',
    time: '07:30 - 08:35',
    next: '08:35 - 09:25 - Štrumpfovi',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Štrumpfovi',
    timeStart: '08:35',
    timeEnd: '09:25',
    time: '08:35 - 09:25',
    next: '09:25 - 10:15 - Samo ti pričaj',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Samo ti pričaj',
    timeStart: '09:25',
    timeEnd: '10:15',
    time: '09:25 - 10:15',
    next: '10:15 - 11:55 - Policijska Akademija 2',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Policijska Akademija 2',
    timeStart: '10:15',
    timeEnd: '11:55',
    time: '10:15 - 11:55',
    next: '11:55 - 13:55 - Party života',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Party života',
    timeStart: '11:55',
    timeEnd: '13:55',
    time: '11:55 - 13:55',
    next: '13:55 - 15:55 - Lovac na glave',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Lovac na glave',
    timeStart: '13:55',
    timeEnd: '15:55',
    time: '13:55 - 15:55',
    next: '15:55 - 17:00 - Stella',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Stella',
    timeStart: '15:55',
    timeEnd: '17:00',
    time: '15:55 - 17:00',
    next: '17:00 - 17:10 - Vijesti Nove TV',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Vijesti Nove TV',
    timeStart: '17:00',
    timeEnd: '17:10',
    time: '17:00 - 17:10',
    next: '17:10 - 17:30 - Stella',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Stella',
    timeStart: '17:10',
    timeEnd: '17:30',
    time: '17:10 - 17:30',
    next: '17:30 - 18:30 - Provjereno',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Provjereno',
    timeStart: '17:30',
    timeEnd: '18:30',
    time: '17:30 - 18:30',
    next: '18:30 - 19:15 - Lud, zbunjen, normalan',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Lud, zbunjen, normalan',
    timeStart: '18:30',
    timeEnd: '19:15',
    time: '18:30 - 19:15',
    next: '19:15 - 20:15 - Dnevnik Nove TV',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Dnevnik Nove TV',
    timeStart: '19:15',
    timeEnd: '20:15',
    time: '19:15 - 20:15',
    next: '20:15 - 22:50 - James Bond: Spectre',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'James Bond: Spectre',
    timeStart: '20:15',
    timeEnd: '22:50',
    time: '20:15 - 22:50',
    next: '22:50 - 00:00 - Šifra: U.N.C.L.E.',
    program: '600db2c0708bd653549a0a23'
  },
  {
    title: 'Šifra: U.N.C.L.E.',
    timeStart: '22:50',
    timeEnd: '23:59',
    time: '22:50 - 00:00',
    next: '00:00 - 02:40 - Maskin sin',
    program: '600db2c0708bd653549a0a23'
  },
  // TODO: RTL 2
  {
    title: 'CSI: NY',
    timeStart: '00:00',
    timeEnd: '01:10',
    time: '00:00 - 01:10',
    next: '01:10 - 02:40 - Hawaii Five-0',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Hawaii Five-0',
    timeStart: '01:10',
    timeEnd: '02:40',
    time: '01:10 - 02:40',
    next: '02:40 - 04:55 - Moja mama je privlačnija',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Moja mama je privlačnija',
    timeStart: '02:40',
    timeEnd: '04:55',
    time: '02:40 - 04:55',
    next: '04:55 - 06:00 - Ruža vjetrova',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Ruža vjetrova',
    timeStart: '04:55',
    timeEnd: '06:00',
    time: '04:55 - 06:00',
    next: '06:00 - 06:45 - Najveći hrvatski misteriji',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Najveći hrvatski misteriji',
    timeStart: '06:00',
    timeEnd: '06:45',
    time: '06:00 - 06:45',
    next: '06:45 - 07:05 - TV prodaja',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'TV prodaja',
    timeStart: '06:45',
    timeEnd: '07:05',
    time: '06:45 - 07:05',
    next: '07:05 - 08:10 - Gastro lutalica',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Gastro lutalica',
    timeStart: '07:05',
    timeEnd: '08:10',
    time: '07:05 - 08:10',
    next: '08:10 - 08:45 - TV prodaja',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'TV prodaja',
    timeStart: '08:10',
    timeEnd: '08:45',
    time: '08:10 - 08:45',
    next: '08:45 - 09:40 - Plati ili vrati',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Plati ili vrati',
    timeStart: '08:45',
    timeEnd: '09:40',
    time: '08:45 - 09:40',
    next: '09:40 - 10:15 - InDizajn s Mirjanom Mikulec',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'InDizajn s Mirjanom Mikulec',
    timeStart: '09:40',
    timeEnd: '10:15',
    time: '09:40 - 10:15',
    next: '10:15 - 12:00 - Krv nije voda',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Krv nije voda',
    timeStart: '10:15',
    timeEnd: '12:00',
    time: '10:15 - 12:00',
    next: '12:00 - 12:50 - Top.HR',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Top.HR',
    timeStart: '12:00',
    timeEnd: '12:50',
    time: '12:00 - 12:50',
    next: '12:50 - 13:30 - LIVE PD',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'LIVE PD',
    timeStart: '12:50',
    timeEnd: '13:30',
    time: '12:50 - 13:30',
    next: '13:30 - 14:50 - Sulude vožnje',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Sulude vožnje',
    timeStart: '13:30',
    timeEnd: '14:50',
    time: '13:30 - 14:50',
    next: '14:50 - 15:30 - Borba čovjeka i hrane',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Borba čovjeka i hrane',
    timeStart: '14:50',
    timeEnd: '15:30',
    time: '14:50 - 15:30',
    next: '15:30- 17:10 - SP u rukometu',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'SP u rukometu',
    timeStart: '15:30',
    timeEnd: '17:10',
    time: '15:30- 17:10',
    next: '17:10 - 19:40 - Zaštita granica: Australija',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Zaštita granica: Australija',
    timeStart: '17:10',
    timeEnd: '19:40',
    time: '17:10 - 19:40',
    next: '19:40 - 20:00 - Sulude vožnje',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Sulude vožnje',
    timeStart: '19:40',
    timeEnd: '20:00',
    time: '19:40 - 20:00',
    next: '20:00 - 21:55 - Predatori',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Predatori',
    timeStart: '20:00',
    timeEnd: '21:55',
    time: '20:00 - 21:55',
    next: '21:55 - 23:30 - Hawaii Five-0',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Hawaii Five-0',
    timeStart: '21:55',
    timeEnd: '23:30',
    time: '21:55 - 23:30',
    next: '23:30 - 00:00 - Motiv',
    program: '600db2c0708bd653549a0a24'
  },
  {
    title: 'Motiv',
    timeStart: '23:30',
    timeEnd: '23:59',
    time: '23:30 - 00:00',
    next: '00:00 - 01:10 - CSI:NY',
    program: '600db2c0708bd653549a0a24'
  },
  // TODO: DOMATV
  {
    title: 'Zlatni dečko',
    timeStart: '00:00',
    timeEnd: '00:55',
    time: '00:00 - 00:55',
    next: '00:55 - 02:15 - Arrow',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Arrow',
    timeStart: '00:55',
    timeEnd: '02:15',
    time: '00:55 - 02:15',
    next: '02:15 - 03:25 - Djevojka sa sela',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Djevojka sa sela',
    timeStart: '02:15',
    timeEnd: '03:25',
    time: '02:15 - 03:25',
    next: '03:25 - 03:30 - Kraj programa',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Kraj programa',
    timeStart: '03:25',
    timeEnd: '03:30',
    time: '03:25 - 03:30',
    next: '03:30 - 03:55 - Zdravlje na kvadrat',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Zdravlje na kvadrat',
    timeStart: '03:30',
    timeEnd: '03:55',
    time: '03:30 - 03:55',
    next: '03:55 - 05:30 - Pod sretnom zvijezdom',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Pod sretnom zvijezdom',
    timeStart: '03:55',
    timeEnd: '05:30',
    time: '03:55 - 05:30',
    next: '05:30 - 08:00 - Inspektor Rex',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Inspektor Rex',
    timeStart: '05:30',
    timeEnd: '08:00',
    time: '05:30 - 08:00',
    next: '08:00 - 08:20 - Neustrašivi Scooby-Doo',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Neustrašivi Scooby-Doo',
    timeStart: '08:00',
    timeEnd: '08:20',
    time: '08:00 - 08:20',
    next: '08:20 - 09:05 - Mini Tom i Jerry',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Mini Tom i Jerry',
    timeStart: '08:20',
    timeEnd: '09:05',
    time: '08:20 - 09:05',
    next: '09:05 - 09:25 - TV izlog',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'TV izlog',
    timeStart: '09:05',
    timeEnd: '09:25',
    time: '09:05 - 09:25',
    next: '09:25 - 10:05 - Kraljevi leda',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Kraljevi leda',
    timeStart: '09:25',
    timeEnd: '10:05',
    time: '09:25 - 10:05',
    next: '10:05 - 10:20 - TV izlog',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'TV izlog',
    timeStart: '10:05',
    timeEnd: '10:20',
    time: '10:05 - 10:20',
    next: '10:20 - 11:00 - Kraljevi leda',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Kraljevi leda',
    timeStart: '10:20',
    timeEnd: '11:00',
    time: '10:20 - 11:00',
    next: '11:00 - 11:20 - TV izlog',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'TV izlog',
    timeStart: '11:00',
    timeEnd: '11:20',
    time: '11:00 - 11:20',
    next: '11:20 - 12:05 - Velečasni Brown',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Velečasni Brown',
    timeStart: '11:20',
    timeEnd: '12:05',
    time: '11:20 - 12:05',
    next: '12:05 - 12:20 - TV izlog',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'TV izlog',
    timeStart: '12:05',
    timeEnd: '12:20',
    time: '12:05 - 12:20',
    next: '12:20 - 13:10 - Inspektor Rex',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Inspektor Rex',
    timeStart: '12:20',
    timeEnd: '13:10',
    time: '12:20 - 13:10',
    next: '13:10 - 13:25 - TV izlog',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'TV izlog',
    timeStart: '13:10',
    timeEnd: '13:25',
    time: '13:10 - 13:25',
    next: '13:25 - 14:10 - Inspektor Rex',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Inspektor Rex',
    timeStart: '13:25',
    timeEnd: '14:10',
    time: '13:25 - 14:10',
    next: '14:10 - 14:55 - Šifra zločina',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Šifra zločina',
    timeStart: '14:10',
    timeEnd: '14:55',
    time: '14:10 - 14:55',
    next: '14:55 - 16:25 - Arrow',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Arrow',
    timeStart: '14:55',
    timeEnd: '16:25',
    time: '14:55 - 16:25',
    next: '16:25 - 17:55 - Zlatni dečko',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Zlatni dečko',
    timeStart: '16:25',
    timeEnd: '17:55',
    time: '16:25 - 17:55',
    next: '17:55 - 19:55 - Petar Pan',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Petar Pan',
    timeStart: '17:55',
    timeEnd: '19:55',
    time: '17:55 - 19:55',
    next: '19:55 - 21:35 - Dva tjedna za ljubav',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Dva tjedna za ljubav',
    timeStart: '19:55',
    timeEnd: '21:35',
    time: '19:55 - 21:35',
    next: '21:35 - 23:25 - Neslomljivi',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Neslomljivi',
    timeStart: '21:35',
    timeEnd: '23:25',
    time: '21:35 - 23:25',
    next: '23:25 - 23:45 - Mladi Sheldon',
    program: '600db2c0708bd653549a0a25'
  },
  {
    title: 'Mladi Sheldon',
    timeStart: '23:25',
    timeEnd: '23:45',
    time: '23:25 - 23:45',
    next: '00:00 - 00:55 - Zlatni dečko',
    program: '600db2c0708bd653549a0a25'
  }
]

export default shows
