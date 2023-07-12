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
        <input type="text" id="myMessage" name="myMessage" />
        <input type="submit" value="submit" />
      </form>
    </main>
  );
};
