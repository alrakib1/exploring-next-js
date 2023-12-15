"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './Users.module.css'
const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

//   console.log(users);

  return (
    <div>
      <h3 className={styles.header_text}>Total users: {users?.length}</h3>
      {users?.map((user) => (
        <div
          key={user.id}
          className="card bg-gray-100 my-10 shadow-xl mx-auto w-[50%]"
        >
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email:{user.email}</p>
            <div className="card-actions justify-center">
              {/* <Link href="/"> <button className="btn btn-outline">Back to Home</button></Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
