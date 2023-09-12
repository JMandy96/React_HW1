import {useState} from 'react'
import "./clicker.css"

const Clicker = () => {
    const [counter, setCounter] = useState(0);
    const colors = ['red','blue','green','purple']
    const [colorIndex, setColorIndex] = useState(0);

    const buttonStyle = {
        backgroundColor: colors[colorIndex]
    }
  return (
    <>
    <button onClick={() => {
        setCounter(counter+1)
        setColorIndex((colorIndex +1 ) % colors.length);
    }}
        className='clicker' 
        style={buttonStyle}
    >
        clicks: {counter}
    </button>
    </>
  )
}
export default Clicker