import Counter from "@/Components/Counter/Counter";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h4>THis is Home page</h4>
      <div className="flex justify-evenly mb-20 gap-5 pt-5">
        <Link href="/about">
          <button className="btn btn-primary">About</button>
        </Link>

        <Link href="/contact">
          <button className="btn btn-primary">Contact</button>
        </Link>

        <Link href="/news">
          <button className="btn btn-primary">News</button>
        </Link>

        <Link href="/contact">
          <button className="btn btn-primary">Contact</button>
        </Link>
        <Link href="/posts">
          <button className="btn btn-primary">Posts</button>
        </Link>
        <Link href="/users">
          <button className="btn btn-primary">Users</button>
        </Link>
      </div>
      <Counter />
    </div>
  );
};

export default page;
