const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf-admin-master',

  // exposes: {
  //   './Component': './projects/mf-admin-master/src/app/app.component.ts',
  // },
  exposes: {
    './adminMasterModule': './projects/mf-admin-master/src/app/modules/admin-master-main/admin-master-main.module.ts'
    // './pruebaHomeComponent': './projects/mf-prueba/src/app/home/home.component.ts'
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
