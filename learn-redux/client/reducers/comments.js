// a reducer takes in two things
  // the action
  // the current state 

function comments(state=[], action) {
  console.log(state, action)
  return state;
}

export default comments;