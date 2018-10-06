import React from 'react';
import Details from './Details';

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

    openDetails(ID){
        this.setState({
            detailsAreOpen: true,
            currentID: ID
        })
    }

    closeDetails(){
        this.setState({
            detailsAreOpen: false,
            currentID: null
        })
    }

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
                    className="result col container-fluid"
                >
                    {result.name}
                    <img 
                        className="img-fluid result-image" 
                        alt={result.name} 
                        src={result.image} 
                    />
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
                />
            </div>
        );
    }
}

export default Results;