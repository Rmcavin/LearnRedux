// a reducer takes in two things
  // the action
  // the current state

function posts(state=[], action) {
  console.log('in reducer')
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default: 
      return state;
  }
}

export default posts;