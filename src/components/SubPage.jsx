// 1. import useContext
import { useContext } from "react";

// 2. import UserText
import { CurrentMessage } from "../App";

export default function SubPage () {
  // 3. Use UserText
  const [message, setMessage] = useContext(CurrentMessage);
  
  return(
    <>
      <h2>{message}</h2>
    </>
  );
};
