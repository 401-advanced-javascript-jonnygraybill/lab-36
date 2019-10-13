import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/counter.store.js'

function Counter(props){
  return (
    <>
      <button onClick={props.dec}>-</button>
      <span>{props.counter.count}</span>
      <button onClick={props.inc}>+</button>
    </>
  );
}
  
const mapStatetoProps = (state)=>({
  counter:state.counter
})

const mapDispatchtoProps = (dispatch, getState)=>({
  inc:()=>dispatch(actions.increment()),
  dec:()=>dispatch(actions.decrement())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
