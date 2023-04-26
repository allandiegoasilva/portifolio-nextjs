import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  items-center justify-center p-24`}
    >
      <div className="w-auto p-3 flex flex-col justify-center items-center backdrop-blur-md border border-gray-800 h-24 rounded-lg bg-white/30">
        <h1 className='text-bold text-4xl  font-anton uppercase whitespace-nowrap text-gray-800'>Web site em reconstrução</h1>
      </div>
    </main>
  )
}
