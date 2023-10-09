import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<h1>Hello World From CDK Deployments</h1>
		</main>
	)
}
