import React from 'react';
import MetricList from './metric';
function Main() {
  return (
    <>
      <main className="main">
        <section className="social-followers-sec">
          
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
