import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import index from './store/index';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import InfoPage from './components/InfoPage';

const App = () => {
  return (
    <Provider store={index}>
      <Router>
        <div className="page-container">
          <nav className="nav">
            <Link className="nav-button" to="/">Главная</Link>
            <Link className="nav-button" to="/info">Информация</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ColorPicker/>
                  <Grid/>
                </>
              }
            />
            <Route
              path="/info"
              element={<InfoPage/>}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
