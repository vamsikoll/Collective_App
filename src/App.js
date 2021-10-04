import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContext"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import About from './pages/About';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
         >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Route path='/' exact component={Home} />
          <Route path='/chat' component={Chat} />
          <Route path='/about' component={About} />

          <AuthProvider>
            <Switch>
            <Route path='/Signup' component={Signup} />
            <Route path='/Login' component={Login} />
            </Switch>
          </AuthProvider>
          
        </div>
        </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;