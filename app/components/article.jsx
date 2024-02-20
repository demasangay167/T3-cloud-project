export default function Article({ title, paragraphs }) {
	return (
		<>
			<h1 className="text-3xl text-center py-8 text-orange-300 underline underline-offset-8 ">
				{title}
			</h1>
			{paragraphs.map((paragraph) => {
				return (
					<p className="pb-2 px-16 indent-16">
						{paragraph}
					</p>
				)
			})}
		</>
	)
}