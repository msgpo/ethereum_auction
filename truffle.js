// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '192.168.1.12',
      port: 8545,
      network_id: '4', // Match any network id
      from: "0x9758238291b3fadb9a9488698965d38b8f3bf4ac"
    }
  }
}
