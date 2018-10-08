import React from 'react';
import Details from './Details';

//Results objects receive results as props from Search
class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            detailsAreOpen: false,
            currentID: null
        }

        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
        this.getCurrentResult = this.getCurrentResult.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    //Passed as prop to Details to open Modal containing
    //Search result details.
    openDetails(ID){
        this.setState({
            detailsAreOpen: true,
            currentID: ID
        })
    }

    //Passed as prop to Details to close Modal on user command
    closeDetails(){
        this.setState({
            detailsAreOpen: false,
            currentID: null
        })
    }

    //Must pass an empty result to Details to prevent error when
    //no result has been selected
    getCurrentResult(){
        if(this.state.currentID === null){
            return {
                name: '',
                image: '',
                description: '',
            }
        }

        const results = this.props.results;
        const currentID = this.state.currentID;


        return results.find((result) => result.id === currentID);
    }

   renderResults(){
        return(
            this.props.results.map(result => (
                <a 
                    key={result.id} 
                    onClick={() => this.openDetails(result.id)}
                    className="result col container"
                >
                    <span className="result-title">{result.name}</span>

                    <span className="container-fluid result-img-cont"><img 
                        className="img-fluid result-img" 
                        alt={result.name} 
                        src={result.image} 
                    /></span>
                </a>
            ))
        );
    }
    
    render(){
        return(
            <div className="results-list container-fluid row">
                {this.renderResults()}
                <Details 
                    result={this.getCurrentResult()}
                    detailsAreOpen={this.state.detailsAreOpen}
                    closeDetails={this.closeDetails}
                    className="Details"
                />
            </div>
        );
    }
}

export default Results;