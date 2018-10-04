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
            }
        }

        const results = this.props.results;
        const currentID = this.state.currentID;
        const currentResult = results.find((result) => result.id === currentID);

        return currentResult;
    }

   renderResults(){
        return(
            this.props.results.map(result => (
                <div key={result.id} className="result col-sm">
                    {result.name}
                    <a onClick={() => this.openDetails(result.id)}>
                        <img alt={result.name} src={result.image} />
                    </a>
                </div>
            ))
        );
    }
    
    render(){
        return(
            <div className="results-list container-fluid">
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