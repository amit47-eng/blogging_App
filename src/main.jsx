import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Profile from './Profile.jsx'
import Settings from './Settings.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<App />} />
        </Routes>
    </Router>
)
