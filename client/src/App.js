import React, {useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Messages from './components/Messages';
import Profile from './components/My-Profile';

function App() {
  const navLinks = ['My Profile', 'Messages', 'Sign-In', 'Sign-Up'];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);

  const renderPage = () => {
    switch(currentPage) {
      case 'My Profile':
        return <Profile />;
      case 'Messages':
        return <Messages />;
      case 'Sign-In':
        return <Sign-In />;
      case 'Sign-Up':
        return <Sign-Up />;
      default:
        return <Home />
    }
  }

  return (
    <main className='flex column align-center'>
      <img
      src={require('./assets/silver-plus-header.png')}
      className='logo'
      alt='Silver Plus Dating'/>
      <Nav
      navLinks={navLinks}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <footer className='flex justify-center align-center'>
        <a href='https://insert-silver-plus-privacy-policy' className='footer-link' target='_blank' rel='noreferrer'>
          Silver Plus Privacy policy
        </a>
        <a href='https://insert-silver-plus-TOC' className='footer-link' target='_blank' rel='noreferrer'>
          Silver Plus Terms and Conditions
        </a>
      </footer>
    </main>
  );
};

export default App;
