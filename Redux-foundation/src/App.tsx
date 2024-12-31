import "./App.css";
import { decerement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const handleIncremnt = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleIncremntBy5 = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecremnt = (amount: number) => {
    dispatch(decerement(amount));
  };
  
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>Redux + Typescript</h3>
      </div>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={()=> handleIncremntBy5(5)}>Increment by 5</button>
        <button onClick={()=> handleIncremnt(1)}>Increment</button>
        <button onClick={()=> handleDecremnt(1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
