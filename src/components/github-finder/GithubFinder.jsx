import { useEffect, useRef, useState } from "react";

export default function GithubFinder() {
  let [userData, setUserData] = useState(null);
  let usernameRef = useRef(null);

  async function getUser() {
    async function fetchUser(username) {
      let res = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: "Bearer ",
        },
      });
      let data = await res.json();
      return data;
    }
    let data = await fetchUser(usernameRef.current.data);
    setUserData(data);
    console.log(data);
  }

  return (
    <div className="profile">
      <div className="search">
        <input ref={usernameRef} type="text" name="" id="" />
        <button onClick={() => getUser()}>Search</button>
      </div>
      <div className="profile-data">
        {/* <img src="" alt="" /> */}
        <p>Public Repos: </p>
        <p>Flowers: </p>
        <p>Folwing: </p>
      </div>
    </div>
  );
}
