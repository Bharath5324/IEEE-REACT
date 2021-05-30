import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js';
import './App.css';
// import Contacts from  './components/Contacts/Contacts.js'
import Achievements from './components/Achievements/Achievements.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer.js'
import Timeline from './components/Timeline.js'
import NotFound from './components/NotFoundPage/NotFoundPage.js'
import EventHandler from './components/EventHandler/EventHandler.js'
import Execom20 from './components/Execom/Execom2020.js'
import Execom21 from './components/Execom/Execom2021.js'


// import Fade from 'react-reveal/Fade';
class App extends Component {
  state={
    SideDrawerOpen: false
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen}; // for opening the sidebar
    });
  };
  closeToggleClickHandler= ()=>{
    this.setState({SideDrawerOpen: false}); // for closing the sidebar
  }
  ad = () =>{
    return this.state.SideDrawerOpen;
  }

  render(){
    let adrawer;
  if(this.state.SideDrawerOpen){
    adrawer=<SideDrawer current={this.ad} closeClickHandler={this.closeToggleClickHandler}/>;
  }

  return (
    <div className="app">
    {/* <div className="credentials">
      <Cred/>
    </div> */}
    <HashRouter >
     <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>

     {adrawer}


    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/events" component={EventHandler}/>
        <Route path="/execom21" component={Execom21}/>
        <Route path="/execom20" component={Execom20}/>
         <Route path="/dropdown"/>
        <Route path="/achievements" component={Achievements}/>
        <Route path="/timeline" component={Timeline}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
      <Footer/>
    </div>
  );
  }
}

export default App;
