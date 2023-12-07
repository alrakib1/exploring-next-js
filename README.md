## Routing  (folder based)
We have to create folder inside app. Folder will have the same name as the path. Inside that folder we have to create page.js file. 

## Dynamic Route (for specific id)
For nesting we have use crate a route then inside that route we have to  create a folder with third bracket. For example I have created Products route and inside that route I have created a dynamic route named [id]. it will get params and searchParams as children.

## Never use "use client" inside the app folder. Those will be server components.

## Client components
client components are used on different folder. It's used on src folder. We have to use "use client"  on the top of the client component. We don't have to use page.js here. We can use regular component name.

## Common layout for example header and footer
To use common components we have create a layout folder inside app folder. that folder will have name inside first bracket () . For example (withlayout). inside that folder we will have to create route that we want to have same layout and we will also have to create layout.js file. this file will take those folder as children and will return it. we will have to use common layout on this layout.js file.

## Link
You can use link to go to different route. But you have to import link from next/link. Link in next js is a little bit different from react. Because in react we use to for direction but in next js we use href for direction just like anchor tag on html.