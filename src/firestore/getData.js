import firebase from 'firebase/app';

//This function returns a Promise for an array of docs from
//the firestore db
export const getData = () => {
    const db = firebase.firestore();
    const dbRef = db.collection('flowers');
    var results = [];

    var dataPromise = dbRef.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            results.push(doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: " + error);
    })
    .then(() => {
        return results
    });

    return dataPromise
    
}
