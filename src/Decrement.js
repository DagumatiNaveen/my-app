import { useDecrement } from "./Hooks/useDecrement"
function Decrement(){

     const [count, handleDecrement] = useDecrement();
    return <>
    <h1>Count:{count}</h1>
    <button onClick={handleDecrement} className="custom-btn">Decrement</button>
    </>
}
export default Decrement;