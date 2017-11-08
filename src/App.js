import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const navData = [
    {'key':'home',
    'name':'Home',
    'url':'#home',
    'data': 'Welcome to my website.  My name is Sterling and I am a JavaScript developer from Portland Oregon.  I created this React application as a learning excercise.  Each section is a separate component.  This site is currently under construction, but you will get cooler as time goes on.'
  },
  {'key':'about',
  'name':'About Me',
  'url':'#about',
  'data':'This is the about me section'
  },
  {'key':'blog',
  'name':'Blog',
  'url':'#blog',
  'data':'This is the blog section'
  },
  {'key':'gh',
  'name':'Github',
  'url':'https://github.com/sterlingstein',
  'data':'you should have gone to a new page.'
  },
  {'key':'contact',
  'name':'Contact',
  'url':'#contact',
  'data':'these are my contact details'
},
{
  'key':'test',
  'name':'testButton',
  'url':'http://www.endoftheinternet.com'
}
];

  const myText = "I'm a senior web developer based in the beautiful Pacific Northwest. I develope ways to capture, process, and deliever data about web site users to a diverse set of back-end applications using front end code. Lorem ipsum dolor sit amet, id a dignissim dolor, posuere bibendum per morbi, turpis blandit tristique mauris, adipiscing in rhoncus enim viverra. Porta et nibh laoreet eleifend, erat cursus libero vitae suspendisse, eu dui et curae, nullam nibh ligula donec. Accumsan sed nec amet vulputate, velit fringilla vel id, id mattis potenti nunc lectus, vitae mi pharetra malesuada. At parturient et id, ante pede sit id, nulla vitae donec ut, vitae varius ultricies amet. Integer nec feugiat est diam, sollicitudin pellentesque in aliquam. A scelerisque urna ultrices, sit in phasellus arcu, ut at cras tortor. Etiam eros tincidunt vivamus, non suscipit nulla accumsan. Ac aliquam augue diam similique, justo eget amet ultrices. Aliquam commodo nisl integer, ut quisque viverra inceptos ac, amet volutpat pede tincidunt. Sed tristique posuere maecenas, pellentesque metus ante fusce dolor, posuere turpis potenti vel, accumsan convallis eu magna quis. Dolor vehicula pellentesque parturient, etiam aliquet quis tempus non. Quam lorem nec donec, posuere sit nunc magna sed, at faucibus donec scelerisque orci, amet nam ac mauris. Elit eu tempor pede, in duis inceptos at tellus, sed pede tellus vehicula eveniet, augue volutpat wisi est in. Ante vehicula eu tristique, potenti nullam aliquam pulvinar, conubia tellus morbi eu adipiscing. Nibh molestie volutpat aut interdum, eleifend placerat interdum nec, adipiscing vivamus sit euismod sodales, et luctus libero ut condimentum. Tortor tellus quisque tempus, ut urna ac duis.";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navData: navData,
      navSelected: '#',
      currentData: ''
    };
    // bind our methods to this.
    this.onNavChange = this.onNavChange.bind(this);
    this.getNavData = this.getNavData.bind(this);
  }

  onNavChange(item) {
    // this uses a synthetic react event;
    /*
    * Update the state witht the current selected nav element.
    * if navSelected doesn't have an external resource value,
    * then AppText will display it.
    *
    * AppText should display Home by default.
    */
    const p = item.url;
    if (p.includes('http')) {
      window.location = p;
    } else {
      //TODO: handle the back/forward buttons and url;
      this.setState({navSelected: item.key, currentData: item.data})
    }
  }

  getNavData(itemKey) {
    /*
    * method of class 'App';
    * @param {sting} itemKey - will be the key pass from this.state.navSelected
    * @return {string} - will the data property that goes with that key from navData
    */
    let navKey = this.state.navSelected;
    for (let n of navData) {
      if( n.key === navKey) {
        return n.data;
      }
    }
  }

  render() {
    const {currentData} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sterling Stein</h2>
        </div>
          <div className="App-body">
            <div className="lft">
              <div className="lft-header"></div>
            </div>
            <div className="cntr">
              <AppNav
                navData={navData}
                onNavChange={this.onNavChange}
              />
              <AppText
                currentData={currentData}
              />
            </div>
            <div className="rght">
              <div className="rght-header"></div>
            </div>
          </div>
        <div className="App-footer">Copywrite Sterling Stein - 2017</div>
      </div>
    )
  }
}

class AppNav extends Component {
  render() {
    const {onNavChange} = this.props; //TODO: do i need this?
    return (
      <nav className="topnav">
        {navData.map(
          (item) => {
            return (
              <button id={item.key} className="navButton" onClick={()=>{onNavChange(item)}}>
              {item.name}
              </button>
            )
          }
        )}
      </nav>
    )
  }
}

class AppText extends Component {

    //TODO: fix when this component updates

  render() {
    const {currentData} = this.props;
    return (
      <div className="content">
        <p className="textContent">{currentData}</p>
      </div>
    )
  }
}

export default App;
