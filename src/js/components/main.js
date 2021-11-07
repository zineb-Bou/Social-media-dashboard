import React from 'react';
import MetricList from './metric';
import SocialMediaList from './social-media-card';
function Main() {
  return (
    <>
      <main className="main">
        <section className="social-media-sec">
          <h2 className="metric-sec_heading visually-hidden">
            Social media review 
          </h2>
          <SocialMediaList />
        </section>
        <section className="metric-sec">
          <h2 className="metric-sec_heading">Overview-today</h2>
          <MetricList />
        </section>
      </main>
    </>
  );
}
export default Main;
