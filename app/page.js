"use client"

import { useState } from "react"

export default function Home() {
	const [quotes, setQuotes] = useState([])
	const [text, setText] = useState("Kuzuzangpo la")

	return (
		<div className="mx-auto w-fit mt-10">
			<div className="text-4xl text-red-500 text-start align-top ps-0">
				{quotes.map((quote) => {
					return (
						<p class>
							{quote}
						</p>
					)
				})}
			</div>
			<div className="text-4xl text-purple-900 text-center mt-12 items-start font-bold">
				{text}
			
			</div>
			<input
				className="text-2xl text-black mt-10 rounded-xl text-indigo-600 font-bold shadow-2xl"
				type="text"
				onChange={(event) => setText(event.target.value)}
				placeholder="Enter Text Here"
			/>
			<button
				className="text-2xl ml-8 font-bold border-4 px-2 ring-offset-black ring-offset-8s rounded-xl bg-violet-500 hover:bg-violet-600 shadow-2xl"
				onClick={() => {
					const newQuotes = quotes.concat([text])
					setQuotes(newQuotes)
					setText("")



				}}
			>
				Save Text
			</button>
			<button>Delete text</button>
			className="text-2xl ml-8 font-bold border-4 px-2 ring-offset-black ring-offset-8s rounded-xl bg-violet-500 hover:bg-violet-600 shadow-2xl"
				onClick={() => {
		</div>
	)
}