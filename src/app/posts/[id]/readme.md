## For dynamic route:

dynamic routers get the params and search params. from there we can get the dynamic data .

Dynamic route fetch data on SSR.


export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map(post=>{
    return {
      id: post.id + "",
    }
  })

  return ids
}

this function is used to get all ids of the data and post them statically.
It should be placed on the top of the main function.

You can also mention id you only want to get like: 

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

it will automatically generate the static html for these data and will make better user interface buttery smooth.