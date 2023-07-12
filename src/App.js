// 1. Import createContext
import { useState, createContext } from 'react';

import Form from './components/Form';
import Page from './components/Page';
import '@picocss/pico'
import './styles/App.css';


// 2. Create and Export
export const CurrentMessage = createContext(null);

function App() {
  const [message, setMessage] = useState(false);

  return (
    <>
{/* // 3. Establish a provider. What you put inside value is what gets sent out */}
      <CurrentMessage.Provider value={[message, setMessage]}>
        <Form setMessage={setMessage} />
        <Page />
      </CurrentMessage.Provider>
    </>
  );
};

export default App;
