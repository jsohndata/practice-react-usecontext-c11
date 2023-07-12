export default function Form({ setMessage }) {

  const updateMessage = (e) => {
    e.preventDefault();
    const message = e.target.myMessage.value; 
    setMessage(message);   
  }

  return (
    <main className="container">
      <form onSubmit={updateMessage}>
        <label htmlFor="myMessage">My Message</label>
        <input type="text" id="myMessage" name="myMessage" placeholder="Enter your message." />
        <input type="submit" className="outline" value="submit" />
      </form>
    </main>
  );
};
