import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const Details = (props) => {
    
    return(
        <Modal 
        isOpen={props.detailsAreOpen}
        onRequestClose={props.closeDetails}
        >
            <button onClick={props.closeDetails}>Close</button>
            <h2>{props.result.name}</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col detailsImage">
                        <img 
                            src={props.result.image} 
                            alt={props.result.name}
                        />
                    </div>
                    <div className="col detailsText">
                        <p className="description"></p>
                        <p className="color">Color: </p>
                        <p className="habitat">Habitat: </p>
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