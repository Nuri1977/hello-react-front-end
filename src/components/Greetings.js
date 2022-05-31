import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings';

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      <h1>Greetings component</h1>
      <h2>{ greeting.message }</h2>
      <button type="button" onClick={() => dispatch(getGreetings())}>Next message</button>
    </div>
  );
};

export default Greetings;
