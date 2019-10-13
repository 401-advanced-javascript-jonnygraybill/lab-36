import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/counter.js";
import Person from "./components/person.js";
import createStore from "./store/index.js";

const store = createStore();

function App() {
	return (
		<Provider store={store}>
			<Person />
			<Counter />
		</Provider>
	);
}

export default App;
