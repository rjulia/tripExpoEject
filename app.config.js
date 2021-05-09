import 'dotenv/config'

export default {
  name: 'plannerTravelApp',
  version: '1.0.0',
  extra: {
    enableComments: process.env.COOLAPP_COMMENTS === 'true',
  },
  ios: {
    bundleIdentifier: 'com.nitroclik.plannertravelapp'
  }
  
}