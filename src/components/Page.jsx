// 1. Import useContext
import { useContext } from "react";
import Button from "./Button.jsx"

// 2. Import
import { CurrentMessage } from "../App";

export default function Page () {
  // 3. Use
  const [message, setMessage] = useContext(CurrentMessage);

  return (
    <section className="container">
      <hgroup>
        <h2>👨🏽 Parent</h2>
        <p>{message}</p>
      </hgroup>
      
      <hgroup>
        <h3>👦🏽 Child</h3> 
        <p>{message}</p>       
      </hgroup>

      <Button />
    </section>
  )
}