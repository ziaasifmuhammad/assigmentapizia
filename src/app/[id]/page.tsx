const DynamicAlbum = async ({ params }: { params: { id: string } }) => {
  // Fetch the album based on its ID
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
  const album = await url.json() // Convert the response into JSON
  console.log("Single Album", album) // Log the album for debugging

  // If the album is found, display its title and ID, otherwise show an error message
  if (!album) return <p>Album not found</p>

  return (
    <main>
      <h1 className="text-5xl">Album Details</h1>
      <h2 className="text-4xl">{album.title}</h2>
      <p>Album ID: {album.id}</p>
    </main>
  )
}

export default DynamicAlbum