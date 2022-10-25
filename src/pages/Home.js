import React from 'react'
import Footer from '../components/Footer';
import Main from '../components/Main'
import Navigation from "../components/Navigation";
// import Modals from '../components/Modals';

function Home() {
  return (
    <>
        <Navigation />
        <Main />
        {/* <Modals /> */}
        <Footer />
    </>
  )
}

export default Home