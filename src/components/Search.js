import React from 'react';
import firebase from 'firebase';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results: []
        };

        this.getResults = this.getResults.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.setResults = this.setResults.bind(this);
    }

    setResults(results){
        this.setState({
            results: results
        });
    }

    getResults = () => {
        const db = firebase.firestore();
        const dbRef = db.collection('flowers');
        const dbQuery = dbRef.where("name", "==", this.state.query);
        var dbPromise = dbQuery.get(); 

        const setStateResults = (results) => {
            this.setResults(results);
        }
        
        dbPromise.then((querySnapshot) => {
            var results = [];
            querySnapshot.forEach((doc) => {
                results.push(doc.data());
            });
            setStateResults(results);
        })
        .catch((error) => {
            console.log("Error getting documnents: ", error);
        });
        
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    renderResults(){
        
        const results = this.state.results.map(result => (
            <li key={result.name}>{result.name}</li>
        ));

        return <ul>{results}</ul>
    }

    render(){
        return(
            <div>
                <h1>{this.state.query}</h1>
                <input type='text' placeholder='Search' value={this.state.query} onChange={this.handleChange} />
                <button onClick={this.getResults}>Search</button>
                <div>{this.renderResults()}</div>
            </div>
        );
    }
}

export default Search;