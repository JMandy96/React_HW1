import NavBar from "./components/Navbar"
import Message from "./components/Message"
import Clicker from "./components/Clicker"
import "./App.css"
function App() {
  return (
    <>
        <NavBar/>
      <div className="alignment">
        <Message/>
        <Clicker/>
      </div>
    </>
  )
}
 
export default App
