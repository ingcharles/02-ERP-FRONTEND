const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  /// edit this name - it should be specific for each remote application
  name: 'prueba',

  /// define key and path to the remote remote module (it should be different of app.module.ts)
  exposes: {
    './pruebaModule': './projects/mf-prueba/src/app/prueba-main/prueba-main.module.ts',
    './pruebaHomeComponent': './projects/mf-prueba/src/app/home/home.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

});
