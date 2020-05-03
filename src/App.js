import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/scrolling-nav.css';
import './css/pageGeneric.css';
import {Navbar} from './globalComponents/navbar/Navbar';
import {FeedBackAndExperiencesCarouselComponent} from './globalComponents/frontPageComponents/FeedBackAndExperiencesCarouselComponent'
import {Section2} from './globalComponents/frontPageComponents/Section2'
import {SignUpComponent} from './globalComponents/frontPageComponents/SignUpComponent'
import {InterviewerGuestPageComponent} from './globalComponents/frontPageComponents/InterviewerGuestPageComponent'

    // ibyc


class App extends Component {

  render (){
    return (
        <div id="page-top" className="container-fluid">
          <Navbar/>
          <FeedBackAndExperiencesCarouselComponent/>
          <Section2/>
          <SignUpComponent/>
          <InterviewerGuestPageComponent/>
        </div>
    );
  }

  //
  // return (
  //   <div className="App">
  //       <p>
  //         <Navbar />
  //       </p>
  //   </div>
  // );
}

export default App;
