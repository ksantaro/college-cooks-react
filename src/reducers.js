const psudoState = {
  selectedMeals: [],
  counter: 0,
}

const Counter = (state = psudoState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default Counter;