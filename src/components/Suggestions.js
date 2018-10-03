import React from 'react';

const Suggestions = (props) => {
    const suggestions = props.results.map(result => (
        <div key={result.id}>
            {result.name}
            <img alt={result.name} src={process.env.PUBLIC_URL + result.image}/>
        </div>
    ))
    
    return (
        <div className="suggestions">
            {suggestions}
        </div>
    );
}

export default Suggestions;