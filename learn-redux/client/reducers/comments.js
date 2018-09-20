// a reducer takes in two things
  // the action
  // the current state 
function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    default: 
      return state;
  }
}

function comments(state=[], action) {
   if (typeof action.postId !== undefined) {
     return {
      //take current state
      ...state,
      //add the new comment
      [action.postId]: postComments(state[action.postId], action)
     }
   }
}



export default comments;