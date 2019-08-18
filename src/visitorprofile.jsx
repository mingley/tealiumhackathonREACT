import React from 'react';

export default props => (
<div className='d-flex justify-content-center'>
  <div className='well'>
      <h4 className='text-primary'>{props.audiences}</h4>
      <p className='badge badge-pill badge-info'>{props.badges}</p>
      <p>{props.dates}</p>
      <h5 className='text-primary'>Metrics</h5>
      <a className='btn btn-primary btn-sm' 
          href={'https://maps.google.com/?q='+props.metrics['lat']+','+props.metrics['long']}>View your location</a>
      <p>{props.metrics['Average Purchase Value'] ? "Average Purchase Value(USD): $" + (Math.round(props.metrics['Average Purchase Value'] * 100) / 100) : null}</p>
      <p>{props.metrics['Average Value Per Visit'] ? "Average Value Per Visit(USD): $" + (Math.round(props.metrics['Average Value Per Visit'] * 100) / 100) : null}</p>
      <p>{props.metrics['Lifetime purchases'] ? "Lifetime Purchases(USD): $" + (Math.round(props.metrics['Lifetime purchases'] * 100) / 100) : null}</p>
      <p>{props.metrics['Lifetime visits'] ? "Lifetime Visits: " + props.metrics['Lifetime visits'] : null}</p>
      <p>{props.metrics['Total time spent on site in minutes'] ? "Time spent on site(Minutes): " + props.metrics['Total time spent on site in minutes'] : null}</p>
      <p>{props.metrics['Number of logins - Past 90 days'] ? "Number of logins in the past 90 days: " + props.metrics['Number of logins - Past 90 days'] : null}</p>
      <h5 className='text-primary'>Properties</h5>
      <p>{props.properties['Lifetime browser types used (favorite)'] ? "Lifetime favorite browser used: " + props.properties['Lifetime browser types used (favorite)'] : null}</p>
      <p>{props.properties['Lifetime devices used (favorite)'] ? "Lifetime favorite device used: " + props.properties['Lifetime devices used (favorite)'] : null}</p>
      <p>{props.properties['Favorite Top Level Category'] ? "Favorite shopping category: " + props.properties['Favorite Top Level Category'] : null}</p>
      <p>{props.properties['Email'] ? "Email: " + props.properties['Email'] : null}</p>
  </div>
</div>
);