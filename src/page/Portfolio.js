import React from 'react'
import Card from '../components/Card';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="porfolio-heading">
        <h1>Porfolio</h1>
        <h4>Some of my work</h4>
      </div>
      <hr className="divider"></hr>
      <div className="porfolio-work">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Portfolio