import React from 'react';
class SwitchThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }
  colorModeFromPreferences() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'; // If preference is set or does not match anything (light is default)
  }
  colorModeFromLocalStorage() {
    return localStorage.getItem('colorMode');
  }
  componentDidMount() {
    this.loadAndUpdateColor();
  }
  loadAndUpdateColor() {
    // local storage has precendence over the prefers-color-scheme
    const color =
      this.colorModeFromLocalStorage() || this.colorModeFromPreferences();
    if (color == 'dark') {
      this.setState({
        active: true,
      });
      document.body.classList = 'dark';
    } else if (color == 'light') {
      this.setState({
        active: false,
      });
      document.body.classList = 'light';
    }
  }
  toggle() {
    if (this.state.active == true) {
      document.body.classList = 'light';
      localStorage.setItem('colorMode', 'light');
      this.setState({
        active: false,
      });
    } else if (this.state.active == false) {
      this.setState({
        active: true,
      });
      document.body.classList = 'dark';
      localStorage.setItem('colorMode', 'dark');
    }
  }
  render() {
    return (
      <>
        <button
          aria-pressed={this.state.active}
          className="header__toggle"
          aria-label="dark theme  "
          onClick={this.toggle.bind(this)}
        >
          <span aria-hidden="true">
            {this.state.active == true ? 'Light theme' : 'Dark theme'}
          </span>
          <span
            className={`toggle ${this.state.active == true ? 'move' : ''} `}
            aria-hidden="true"
          ></span>
        </button>
      </>
    );
  }
}
export default SwitchThemeButton;
