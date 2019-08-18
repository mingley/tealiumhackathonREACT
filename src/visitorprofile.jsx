import React from 'react';

export default props => (

<div className='well'>
    <h4 className='text-primary'>{props.audiences}</h4>
    <p className='badge badge-pill badge-info'>{props.badges}</p>
    <p>{props.dates}</p>
    <h5 className='text-primary'>Metrics</h5>
    <a className='btn btn-primary btn-sm' 
        href={'https://maps.google.com/?q='+props.metrics['lat']+','+props.metrics['long']}>View your location</a>
    <p>Average Purchase Value(USD): ${Math.round(props.metrics['Average Purchase Value'] * 100) / 100}</p>
    <p>Average Value Per Visit(USD): ${Math.round(props.metrics['Average Value Per Visit'] * 100) / 100}</p>
    <p>Lifetime Purchases(USD): ${Math.round(props.metrics['Lifetime purchases'] * 100) / 100}</p>
    <p>Lifetime Visits: {props.metrics['Lifetime visits']}</p>
    <p>Time spent on site(Minutes): {props.metrics['Total time spent on site in minutes']}</p>
    <p>Number of logins in the past 90 days: {props.metrics['Number of logins - Past 90 days']}</p>
    <h5 className='text-primary'>Properties</h5>
    <p>Lifetime favorite browser used: {props.properties['Lifetime browser types used (favorite)']}</p>
    <p>Lifetime favorite device used: {props.properties['Lifetime devices used (favorite)']}</p>
    <p>Favorite shopping category: {props.properties['Favorite Top Level Category']}</p>
    <p>Email: {props.properties['Email']}</p>
</div>
);