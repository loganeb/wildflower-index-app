import firebase from 'firebase';

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
        console.log('Data received.');
        return results
    })
    .catch((error) => {
        console.log("Error getting documnents: ", error);
    });

    return dataPromise
    
}
