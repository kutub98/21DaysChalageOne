
import './App.css';
import {
  IncrementByValue,
  decrement,
  increment,
} from './Redux/Features/Counter/CounterSlice';
import { useAppDispatch, useAppSelector } from './Redux/Hooks';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch()
  return (
    <div className="justify-center items-center flex my-auto bg-gray-50 shadow-xl  ">
      <button
        onClick={() => dispatch(increment())}
        className="bg-purple-500 text-white rounded px-3 py-2"
      >
        Increment
      </button>
      <span className="mx-8  text-5xl font-bold p-4">{count}</span>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-green-500 text-white rounded px-3 py-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(IncrementByValue(5))}
        className="bg-green-500 text-white rounded px-3 py-2"
      >
        IncrementBy 5
      </button>
    </div>
  );
}

export default App;
