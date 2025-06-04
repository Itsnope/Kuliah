import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (userInfo) => {
    // Simulasi proses login 
    setUserData(userInfo);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Proses logout
    setUserData(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <HomePage 
          userData={userData} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
}

export default App;