/*
Built by Logan Bynes

This React app utilizes the cloud storage, database and
hosting features of Firebase.

The config variable below is required for Firebase and can
be modified for hosting on a new app page.

The app also uses react-modal to display a popover window when
a search result is clicked.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import registerServiceWorker from './registerServiceWorker';
import Modal from 'react-modal';

//Config and initialize firebase
var config = {
    apiKey: "AIzaSyB2mSaVQXao_LOqphYahR84ZwFkx06ApPg",
    authDomain: "flower-app-10958.firebaseapp.com",
    databaseURL: "https://flower-app-10958.firebaseio.com",
    projectId: "flower-app-10958",
    storageBucket: "flower-app-10958.appspot.com",
    messagingSenderId: "798314127220"
  };
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

//Enable accessiblity features of Modal 
Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
