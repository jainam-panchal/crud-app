import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar/>

                {/* Switch changed to Routes 
                    ref: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
                 */}
                
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route path="*" Component={NotFound} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
