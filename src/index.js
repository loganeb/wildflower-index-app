import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
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

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
