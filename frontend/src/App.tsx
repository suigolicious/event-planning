// App.tsx
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './pages/sign-in/SignIn'; // Adjust the path based on your project structure
import Dashboard from './pages/dashboard/components/Dashboard';
import Alerts from './pages/alerts/components/Alerts';
import Menu from './pages/dashboard/components/Menu';
import './App.scss';

function App() {
  return (
    <div className='event-planner-app'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;