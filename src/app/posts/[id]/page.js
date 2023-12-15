import Link from "next/link";


const DetailPage = async({params}) => {
// console.log(params)
const res = await fetch(`http://localhost:5000/posts/${params.id}`, {
    cache: "no-store"  
   });

  //  if we don't use  cache: "no-store" then it will automatically generate static site
   const post = await res.json();

    return (
        <div>
              <div
            key={post.id}
            className="card bg-gray-100 my-10 shadow-xl mx-auto w-[50%]"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>Likes:{post.likes}</p>
              <div className="card-actions justify-center">
               <Link href="/posts"> <button className="btn btn-secondary">Back</button></Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default DetailPage;