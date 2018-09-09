import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator'
import Main from './Main';

// passes state as props to component
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

// passes actions as props to component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;