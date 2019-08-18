import React from 'react';

export default props => (

<div className='well'>
    <h4>{props.audiences}</h4>
    <p>{props.badges}</p>
    <p>{props.dates}</p>
    <a className="btn btn-primary btn-sm" 
        href={"https://maps.google.com/?q="+props.metrics['lat']+","+props.metrics['long']}>View your location</a>
    <p>Average Purchase Value:{props.metrics['Average Purchase Value']}</p>
    <p>Average Value Per Visit:{props.metrics['Average Value Per Visit']}</p>
    <p>Lifetime purchases:{props.metrics['Lifetime purchases']}</p>
</div>
);