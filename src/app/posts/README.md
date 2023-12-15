## Data fetching
To fetch Data on next js, you have to use async, await because data will be fetched on server. checkout the posts folder for example.
We don't need to use useeffect or state management

there are two types of rendering: static site rendering and server site rendering.

<h1>Static site rendering</h1>

For static site rendering if you change any data on database it won't update automatically. You will have to add next{revalidate:(time)} inside fetch. like this: 
const res = await fetch("http://localhost:5000/posts", {
    next: {
      revalidate: 5,
    },
  });

  it will run build operation after that certain time and will update data on site.
  By default it will be force cache .

<h1>Server site rendering</h1>

example:

  const res = await fetch("http://localhost:5000/posts", {
   cache: "no-store"
  });


for every user request data will change dynamically and will see latest data.



  For social media or news portal app where data frequently change then server site render is recommended and for e-commerce site where price update after a period of time then static site rendering is recommended.

Note: Data that wouldn't be fetched will still be static for website.


check [id] folder to know about dynamic data fetching


## Module css:

React overflows css . But next js made some changes . it won't overflow. For example post page h1 tag and users page h1 tag has same className but it haven't overflowed with each other.