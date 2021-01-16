import './App.css';
import Header from './components/header';
import Color from './components/color'

import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      colors: [
        {hex: '#FFFFFF', isLocked: false},
        {hex: '#FFFFFF', isLocked: false},
        {hex: '#FFFFFF', isLocked: false},
        {hex: '#FFFFFF', isLocked: false},
        {hex: '#FFFFFF', isLocked: false},
      ]
    };
  };

  toggle = (i) => {
    let newColors = this.state.colors.map((color, index) => {
      if (i === index) {
          return {
              ...color,
              isLocked: !color.isLocked
          }
      } else {
          return color;
      };
    });
    this.setState({
      colors: newColors
    });
  };

  randomizeColors = () => {
    let newColors = this.state.colors.map((color) => {
      if (!color.isLocked) {
        return {
          ...color,
          hex: `#${Math.floor(Math.random() * 16777215).toString(16)}`
        }
      } else {
        return color;
      }
    })
    this.setState({
      colors: newColors
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button type="button" className="btn btn-primary mb-1" onClick={() => this.randomizeColors()}>Randomize!</button>
        <div className="row">
          {this.state.colors.map((color, i) => {
            return <Color color={color} key={i} toggleLock={() => this.toggle(i)} />
            })}
            </div>
      </div>
    );
  };
};

export default App