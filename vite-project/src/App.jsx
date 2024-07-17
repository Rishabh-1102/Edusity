import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Programs from './components/Programs.jsx';
import Title from './components/Title.jsx';
import About from './components/About.jsx';
import Campus from './components/Campus.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';

const App = () => {

  const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;