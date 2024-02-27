

export default function Lyrics({ lyrics, artist, title }) {
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl indent-36 text-red-300">
					{title} by {artist}
				</h1>
				<p className="mt-6 text-lg leading-8 text-white">
					{lyrics}
				</p>
			</div>
		</>
	)
}