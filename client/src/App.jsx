import React from "react";
import { useState } from "react";

const initialState = {
	amount: 0,
	description: "",
	date: "",
};
function App() {
	const [form, setform] = useState(initialState);
	async function handleSubmit(e) {
		e.preventDefault();

		const res = await fetch("http://localhost:4000/transaction", {
			method: "POST",
			body: form,
		});
		console.log(res);
	}

	function handleInput(e) {
		setform({ ...form, [e.target.name]: e.target.value });
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleInput}
					value={form.amount}
					type="number"
					name="amount"
					id="amount"
					placeholder="Enter Amount"
				/>
				<input
					onChange={handleInput}
					value={form.description}
					type="text"
					name="description"
					id="description"
					placeholder="Enter Description"
				/>
				<input
					onChange={handleInput}
					value={form.date}
					type="date"
					name="date"
					id="date"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
