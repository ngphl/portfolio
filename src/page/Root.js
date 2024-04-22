import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <div>
      <Navbar />
      {/* Welcome Section*/}
      <section id="welcome-section">
        <h1>Hey I'm Long</h1>
        <p>a self-learner,</p>
        <p>welcome to my half-ass website</p>
      </section>
      {/* End Welcome Section*/}
      {/* Outlet is where the active route will be rendered */}
      <Outlet />
    </div>
  );
}

export default Root