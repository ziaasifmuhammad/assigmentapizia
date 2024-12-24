import Link from "next/link"

export default async function Home() {
  // Fetch all albums from the JSONPlaceholder API
  const url = await fetch("https://jsonplaceholder.typicode.com/albums")
  const response = await url.json() // Convert the response into JSON
  console.log(response) // Log the data for debugging

  return (
    <main>
      <h1 className="text-5xl">All Albums</h1>
      {
        response.map((album: { id: number; title: string }) => (
          <div key={album.id}>
            <Link href={`/albums/${album.id}`}>
              <h1 className="text-3xl">
                {album.title} &nbsp; &nbsp; {album.id}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  )
}