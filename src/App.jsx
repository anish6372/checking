import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login"
import Editor from './components/Editor'
import Dashboard from "./components/Dashboard"
import axios from 'axios';

import './App.css'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:5000/auth/user', { withCredentials: true })
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login/>} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
        <Route path="/editor" element={user ? <Editor user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
