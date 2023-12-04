import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div>
      <h1>This is news page</h1>
      <Link className="no-underline text-blue-600" href="news/article">
        {" "}
        Article
      </Link>
      <br />
      <br />
      <Link href='news/blog'>Blog</Link>
    </div>
  );
};

export default NewsPage;
