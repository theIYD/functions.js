const firebase = require('firebase');
require('dotenv').config()
const functions = require('./allfunctions');

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID
};

let app = firebase.initializeApp(config);
let temp = [];

for(let i=0; i<functions.length; i++) {
    temp.push(functions[i])
}

app.database().ref('rootRef/functions1').set(temp, (err) => {
    if(err) console.log(err);
    else  {
        console.log('Data inserted.')
        process.exit(2);
    }
});

