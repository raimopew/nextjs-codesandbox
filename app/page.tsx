import Image from 'next/image'
import Hello from "@/components/Hello"
import Counter from "@/components/Counter"

export default function Home() {
  return (
    <main>
      <Hello/>
      <Counter/>
    </main>
  )
}
