import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/person.store.js";

function Person(props) {
	return (
		<header>
			<h1>{props.person.name}</h1>
			<button onClick={props.upper}>Upper</button>
			<button onClick={props.lower}>Lower</button>
			<form onSubmit={e => e.preventDefault()}>
				<input onChange={e => props.set(e.target.value)} />
			</form>
		</header>
	);
}

const mapStateToProps = state => ({
	person: state.person
});

const mapDispatchToProps = (dispatch, getState) => ({
	set: newName => dispatch(actions.set(newName)),
	upper: () => dispatch(actions.uppercase()),
	lower: () => dispatch(actions.lowercase())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Person);
