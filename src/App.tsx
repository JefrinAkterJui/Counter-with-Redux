import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const dispatch  = useAppDispatch()
  const {count}   =useAppSelector((state)=> state.counter)

  const handelIncrement =()=>{
    dispatch(increment())
  }
  const handelDicrement =()=>{
    dispatch(decrement())
  }
  return (
    <>
      <div>Counter with React</div>
      <button onClick={handelIncrement}>Increment</button>
      <div>{count}</div>
      <button onClick={handelDicrement}>Decrement</button>
    </>
  )
}

export default App
