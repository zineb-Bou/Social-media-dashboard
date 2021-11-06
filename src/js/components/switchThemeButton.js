import React from 'react';
class SwitchThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
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
        active: 'dark',
      });
      document.body.classList = 'dark';
    } else if (color == 'light') {
      this.setState({
        active: 'light',
      });
      document.body.classList = 'light';
    }
  }
  toggle() {
    if (this.state.active == 'dark') {
      document.body.classList = 'light';
      localStorage.setItem('colorMode', 'light');
      this.setState({
        active: 'light',
      });
    } else if (this.state.active == 'light') {
      this.setState({
        active: 'dark',
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
          aria-label="theme toggle"
          onClick={this.toggle.bind(this)}
        >
          {this.state.active == 'dark' ? 'Light theme' : 'Dark theme'}
          <span
            className={`toggle ${this.state.active == 'dark' ? 'move' : ''} `}
            aria-hidden="true"
          ></span>
        </button>
      </>
    );
  }
}
export default SwitchThemeButton;
