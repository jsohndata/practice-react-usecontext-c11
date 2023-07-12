// 1. import createContext
import { useState, createContext } from 'react';

import Page from './components/Page';
import '@picocss/pico'
import './styles/App.css';

// 2. create and export
export const CurrentMessage = createContext(null);

function App() {
  const [message, setMessage] = useState(false);

  const updateMessage = (e) => {
    e.preventDefault();

    setMessage(e.target.myMessage.value);
  };

  return (
    <>
{/* // 3. Establish a provider. What you put inside value is what gets sent out */}
      <CurrentMessage.Provider value={[message, setMessage]}>
        <main className="container">
          <form onSubmit={updateMessage}>
            <label htmlFor="myMessage">My Message</label>
            <input type="text" id="myMessage" name="myMessage" />
            <input type="submit" value="submit" />
          </form>
        </main>

        <Page />
      </CurrentMessage.Provider>
    </>
  );
};

export default App;
