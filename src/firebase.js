import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7FkUVDv3lG3uEOc-J7jCCNsBIuhbGkJU",
    authDomain: "jacqueline-nosal-project-five.firebaseapp.com",
    databaseURL: "https://jacqueline-nosal-project-five.firebaseio.com",
    projectId: "jacqueline-nosal-project-five",
    storageBucket: "jacqueline-nosal-project-five.appspot.com",
    messagingSenderId: "1029935966372",
    appId: "1:1029935966372:web:ec16c559eacacb43351e31",
    measurementId: "G-WHM0G69WJR"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
