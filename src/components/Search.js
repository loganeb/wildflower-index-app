import React from 'react';
import Results from './Results';
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

    componentWillMount(){
        let dataPromise = getData();

        dataPromise.then((results) => {
            this.setState({
                data: results
            });
        })

    }

    getResults = (query) => {
        const data = this.state.data;
        const parsedQuery = query.toUpperCase().split(/[+, -]/);

        let results = [];

        data.forEach((doc) => {
            parsedQuery.forEach((queryWord) => {
                if(queryWord.length > 0 && doc.tags.toUpperCase().includes(queryWord)){
                    if(!results.find((result) => result.id === doc.id))
                        results.push(doc);
                }
            });
        });

        if(results.length > 0){
            this.setState({
                results: results
            });
        }else{
            this.setState({
                results: []
            });
        }
    }

    handleChange = (event) => {
        const query = event.target.value;

        if(query.length > 2)
            this.getResults(query);

        this.setState({
            query: query
        });
    }

    renderResults(){
        if(this.state.results.length > 0)
            return <Results results={this.state.results}/>
    }

    render(){
        return(
            <div className="Search">
                <input type='text' placeholder='Search' onChange={this.handleChange} />
                {this.renderResults()}
            </div>
        );
    }
}

export default Search;