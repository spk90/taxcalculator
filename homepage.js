import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Incometax from './Incometax';

const Homepage = () => {

  const handleIncometaxClick = () => {
    const IncometaxWindow = window.open('', '_blank');           
    IncometaxWindow.document.write('<html><head><title>Incometax</title></head><body></body></html>');
    ReactDOM.render(<Incometax />,IncometaxWindow.document.body);
  };

  return (
    <div className='Image'>
      {/* The App component */}
      <div className="App">
        {/* The header section */}
        <header className="App-header">
          <p>
            {/* Placeholder text */}
          </p>
        </header>
        {/* The content section */}
        <div className="content">
          {/* Empty */}
        </div>
        {/* The footer section */}
        <footer className="footer">
          {/* The about section */}
          <h1>About BASS</h1>
          <p>
            {/* Description of BASS */}
            BASS is a tax calculation system that provides businesses with an efficient and accurate way to calculate and manage their taxes. The system is designed to simplify the complex process of tax calculation and help businesses comply with tax laws and regulations.
          </p>
        </footer>
      </div>

      {/* The buttons section */}
      <div>
        {/* The upper buttons */}
        <div className="buttons_upper">
          {/* Incometax button */}
          <button className="large-button" onClick={handleIncometaxClick}></button>

          {/* Large 1 button */}
          <button className="large1-button"></button>  
        </div>
        {/* The lower buttons */}
        <div className="lower_buttons">
          {/* Small button */}
          <button className="small-button"></button>
          {/* Small 1 button */}
          <button className="small1-button"></button> 
          {/* The View history button */}
          <div className="viewhistory">
            <button>View history</button>
          </div>
        </div> 
      </div>

    </div>
  );
}

export default Homepage;
