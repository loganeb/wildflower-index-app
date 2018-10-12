import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const Details = (props) => {
  
    return(
        <Modal 
        isOpen={props.detailsAreOpen}
        onRequestClose={props.closeDetails}
        >
            <a className="details-btn" onClick={props.closeDetails}></a>
            <h2>{props.result.name}</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm details-image">
                        <img 
                            className="img-fluid"
                            src={props.result.image} 
                            alt={props.result.name}
                        />
                        <p className="attribution">Image Source: {props.result.attribution}</p>
                    </div>
                    <div className="col-sm details-text">
                        <p className="description">{props.result.description}</p>
                        <div className="color"><h4>Color: </h4>{props.result.color}</div>
                        <br></br><div className="habitat"><h4>Habitat: </h4>{props.result.habitat}</div>
                        <br></br><div className="binomial"><h4>Scientific Name: </h4><i>{props.result.binomial}</i></div>
                    </div>
                </div>
            </div>

        </Modal>
    );
    
}

Details.propTypes = {
    result: PropTypes.object,
    detailsAreOpen: PropTypes.bool.isRequired,
    closeDetails: PropTypes.func.isRequired
}

export default Details;