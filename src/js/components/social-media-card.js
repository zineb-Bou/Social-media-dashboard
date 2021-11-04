import React, { Component } from 'react';
import { followerData } from '../data.js';
import { formatNumber } from '../number-format';
import { Logo } from './logo';
const changeDirection = (changePercent) => (changePercent >= 0 ? 'up' : 'down');

export class SocialMediaCrad extends Component {
  render() {
    return (
      <article className={`social-media-card ${this.props.brand}`}>
        <h3 className="social-media-card__heading">
          <Logo brand={this.props.brand} aria-hidden />
          <a href="#">{this.props.username}</a>
        </h3>
        <p className="social-media-card__value">
          {formatNumber(this.props.value)}
        </p>
        <p className="social-media-card__metric">
          {formatNumber(this.props.metric)}
        </p>
        <p
          className={`social-media-card__change-${changeDirection(
            this.props.change
          )}`}
        >
          <span
            className={`social-media-card__chevron-${changeDirection(
              this.props.change
            )}`}
            aria-hidden
          ></span>
          <span>
            {Math.abs(this.props.change)}%{this.props.period}
          </span>
        </p>
      </article>
    );
  }
}

function SocialMediaList() {
  let list = [];
  followerData.forEach((element) => {
    list.push(
      <SocialMediaCrad
        brand={element.brand}
        username={element.username}
        value={element.value}
        metric={element.metric}
        change={element.change}
        metric={element.metric}
      />
    );
  });
  return <div className="social-media-wrapper">{list}</div>;
}

export default SocialMediaList;
