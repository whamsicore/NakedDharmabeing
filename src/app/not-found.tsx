
import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = headers()
  const fullPath = `${headersList.get('host')}/${headersList.get('x-forwarded-path')}`
  // const data = await getSiteData(domain)
  return (
    <div className="bg-white text-black flex justify-center items-center h-max">
      <div className="text-center">
        <h2>Not Found: {fullPath}</h2>
        <p>Could not find requested resource</p>
        <Link className="inline-block bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-4" href="/">
          Return Home
        </Link>
      </div>
    </div>
  )
}