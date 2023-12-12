import React, {useState} from 'react';
import Navbar from './components/Navbar'
import {
  About,
  Footer,
  Hero,
  Process,
  Referral,
  Services,
  Teams,
  Options,
  Contact,
} from './views'; // Assuming index.tsx is in the same directory as App.tsx
import NavMenu from './components/NavMenu'


const App = () => {
  const [openPhoneMenu, setOpenPhoneMenu] = useState()

  return (
    <div>
      <Navbar openPhoneMenu={openPhoneMenu} setOpenPhoneMenu={setOpenPhoneMenu} />
      <main>
        <NavMenu openPhoneMenu={openPhoneMenu} setOpenPhoneMenu={setOpenPhoneMenu}/>
      </main>
      <Hero />
      <Options />
      <About />
      <Services />
      <Process />
      <Referral />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
