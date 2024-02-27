import Quote from "./components/quote"
import Lyrics from "./components/lyrics"

async function getData() {
	const res = await fetch("https://pixabay.com/api/?key="+ process.env.API_KEY +"&q=yellow+flowers&image_type=photo&pretty=true")

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<>
			
		</>
	)
}

import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
