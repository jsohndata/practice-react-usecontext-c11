// 1. import useContext
import { useContext } from "react";

// 2. import UserText
import { CurrentMessage } from "../App"

export default function Button () {
  // 3. Use UserText
  const [message, setMessage] = useContext(CurrentMessage);

  return (
      <button 
        className="contrast outline"
        onClick={ () => setMessage('👾 Button Message via useContext!')}>
          Override Message
      </button>
  )
}