// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    // eslint-disable-next-line @typescript-eslint/quotes
    apiKey: "AIzaSyC5Z3O945tvpBoOfpm22onsLmOnZbDYNh4",
    authDomain: 'fir-login-1e70c.firebaseapp.com',
    projectId: 'fir-login-1e70c',
    storageBucket: 'fir-login-1e70c.appspot.com',
    messagingSenderId: '1090466765000',
    appId: '1:1090466765000:web:54fe51a602f7fa2bcd2dfd'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
