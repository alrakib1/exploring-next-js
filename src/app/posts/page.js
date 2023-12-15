import Link from "next/link";
import styles from './Posts.module.css'

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
   cache: "no-store"
  });
  const posts = await res.json();
  // console.log(posts);

  return (
    <div className="w-full">
      <h1 className={styles.header_text}>Total Post: {posts.length} </h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-gray-100 my-10 shadow-xl mx-auto w-[50%]"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>Likes:{post.likes}</p>
              <div className="card-actions justify-center">
               <Link href={`/posts/${post.id}`}> <button className="btn btn-primary">See More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
