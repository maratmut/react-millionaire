import { useRef } from "react"

export default function Start({setUserName}) {
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }
  return (
    <div className="start">
        <input 
        ref={inputRef}
        type="text" 
        placeholder="Введите Имя" 
        className="startInput" />
        <button onClick={handleClick} className="startButton">Начать играть</button>
    </div>
  )
}
