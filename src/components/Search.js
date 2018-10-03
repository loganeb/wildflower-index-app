import React from 'react';
import Suggestions from './Suggestions';
import { getData } from '../firestore/getData';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            data: [],
            results: []
        };

        this.getResults = this.getResults.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    componentDidMount(){
        let dataPromise = getData();

        dataPromise.then((results) => {
            this.setState({
                data: results
            });
            console.log(this.state.data);
        })

    }

    getResults = () => {
        const data = this.state.data;
        const query = this.state.query;
        let results = [];

        console.log(query);

        data.forEach((doc) => {
            if(doc.name.includes(query))
                results.push(doc);
        });

        if(results.length > 0){
            this.setState({
                results: results
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    renderResults(){
        if(this.state.results.length > 0)
            return <Suggestions results={this.state.results}/>
    }

    render(){
        return(
            <div>
                <h1>{this.state.query}</h1>
                <input type='text' placeholder='Search' value={this.state.query} onChange={this.handleChange} />
                <button onClick={this.getResults}>Search</button>
                {this.renderResults()}
            </div>
        );
    }
}

export default Search;