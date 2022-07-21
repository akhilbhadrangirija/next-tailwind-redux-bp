import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Select from './Components/Select'

export default function Home() {
  return (
    <>
      <NextSeo title="Simple Usage Example" />
      <main className="container">
        <Select />
      </main>
    </>
  )
}
