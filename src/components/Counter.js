import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const toggle = useSelector(state=>state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increseHandler = () =>{
    dispatch(counterActions.increase(6))
  }
    

  
  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increseHandler}>Increment by 6</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
