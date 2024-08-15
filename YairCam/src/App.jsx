import React from 'react';
import CoolestFuturisticComponent from './ShowOff.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const goToGallary = () => {
      navigate('/gallery');
  };

    return (
        <div className="App">
            <CoolestFuturisticComponent />
            <div className="futuristic-photo-grid">
              <div className="futuristic-photo">
                  <img src="peach.png" alt="peach" onClick={goToGallary}/>
              </div>
              <div className="futuristic-photo">
                  <img src="radish.png" alt="radish" />
              </div>
            </div>
        </div>
    );
}

export default App;