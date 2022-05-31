export const GET_GREETINGS = 'hello/greetings/GREETINGS';

const initialState = {
  message: 'LOADING',
};

export const setGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const getGreetings = () => async (dispatch) => {
  const result = await fetch('http://localhost:3000/v1/greetings');
  const data = await result.json();
  dispatch(setGreetings(data));
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
