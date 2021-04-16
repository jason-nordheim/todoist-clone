const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBDJ3ogQOwOHsVOz9a1d-6e1G0UaAbumMw",
  authDomain: "every-do.firebaseapp.com",
  databaseURL: "https://every-do-default-rtdb.firebaseio.com",
  projectId: "every-do",
  storageBucket: "every-do.appspot.com",
  messagingSenderId: "173722371102",
  appId: "1:173722371102:web:9aa523d63944dea16e5a0f",
  measurementId: "G-E594GW38GL",
});
firebaseConfig.analytics();
export { firebaseConfig as firebase };
