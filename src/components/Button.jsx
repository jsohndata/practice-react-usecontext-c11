// 1. import useContext
import { useContext } from "react"
// 2. import UserText
import { UserStatus } from "../App"


export default function Button () {
  // 3. Use UserText
  const[signedIn, setSignedIn] = useContext(UserStatus)
  return (
    <>
      <button onClick={ () => setSignedIn(!signedIn)}>
      {signedIn ? "Sign Out" : "Sign In"}
    </button>
    </>
  )
}