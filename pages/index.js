import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Select from '../Components/Select'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector(state => state.operator.currentUser)
  return (
    <>
      <NextSeo title="Simple Usage Example" />
      <main className="container">
        {/* <Select /> */}

        <div className="flex justify-center items-center gap-5 flex-col">
          <p>operator : {user.name}</p>
          {user.packages.map((data, i) => {
            return (
              <div key={i}>
                <p>{data.packageName}</p>
              </div>
            )
          })}
          <div>
            Destination
            <Select />
          </div>
        </div>
      </main>
    </>
  )
}
