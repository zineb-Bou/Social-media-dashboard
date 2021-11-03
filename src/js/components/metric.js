import React from 'react';
// import { followerData } from '../data.js';
import { metricData } from '../data.js';
import { formatNumber } from '../number-format';
import { Logo } from './logo';
const changeDirection = (changePercent) => (changePercent >= 0 ? 'up' : 'down');
class MetricCard extends React.Component {
  // onClick={clickLink}
  // clickLink(){

  // }
  render() {
    return (
      <article className={`metric__${this.props.brand}`}>
        <h3 className="metric__heading">
          <a href="#">{this.props.metric}</a>
        </h3>
        <Logo brand={this.props.brand} aria-hidden />
        <p className="metric__value">{formatNumber(this.props.value)}</p>
        <p
          className={`metric__changePercent-${changeDirection(
            this.props.changePercent
          )}`}
        >
          <span
            className={`metric__chevron-${changeDirection(
              this.props.changePercent
            )}`}
            aria-hidden
          ></span>
          <span>{Math.abs(this.props.changePercent)}%</span>
        </p>
      </article>
    );
  }
}

function MetricList() {
  let list = [];
  metricData.forEach((element) => {
    list.push(
      <MetricCard
        brand={element.brand}
        value={element.value}
        metric={element.metric}
        changePercent={element.changePercent}
      />
    );
  });
  return <div className="metric-wrapper">{list}</div>;
}
export default MetricList;
