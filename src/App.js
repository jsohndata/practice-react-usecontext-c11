// 1. import createContext
import { useState, createContext } from 'react';
import Page from './components/Page';

import './App.css';

// 2. create and export
export const UserStatus = createContext(null)

function App() {
  const[signedIn, setSignedIn] = useState(false)
  return (
    <>
      {/* 3. Establish a provider. What you put inside value is what gets sent out */}
      <UserStatus.Provider value={[signedIn, setSignedIn]}>
        <h1>{signedIn ? "Click to Sign Out" : "Click to Sign In"}</h1>
        <Page />
      </UserStatus.Provider>

    </>
  );
}

export default App;
