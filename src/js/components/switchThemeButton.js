import React from 'react';
function addBodyClass(className) {
  document.body.classList.add(className);
}
function removeBodyClass(className) {
  document.body.classList.remove(className);
}
const colorPreferance = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

class SwitchThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: colorPreferance,
    };
  }
  isActive() {
    return this.state.active;
  }
  toggle() {
    this.setState({
      active: !this.isActive(),
    });
    if (this.isActive()) {
      addBodyClass('light');
      removeBodyClass('dark');
    } else {
      addBodyClass('dark');
      removeBodyClass('light');
    }
  }
  render() {
    return (
      <>
        <button
          aria-pressed={this.isActive.bind(this)}
          className="header__toggle"
          aria-label="theme toggle"
          onClick={this.toggle.bind(this)}
        >
          {this.isActive() ? 'Light theme' : 'Dark theme'}
          <span
            className={`toggle ${this.state.active ? 'move' : ''}`}
            aria-hidden="true"
          ></span>
        </button>
      </>
    );
  }
}

export default SwitchThemeButton;
