import React from 'react';
import SwitchThemeButton from './switchThemeButton';
export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__title">
            <h1>Social Media Dashboard</h1>
            <p className="header__subtitle">Total Followers:23,004</p>
          </div>
          <SwitchThemeButton />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
