import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Post from "./Post";
import { db } from "../firebase";

// const posts = [
//   {
//     id: 0,
//     username: "hmc",
//     userImg: "https://avatars.dicebear.com/api/human/c.svg",
//     img: "https://avatars.dicebear.com/api/jdenticon/s.svg",
//     caption: "This is Awesome!",
//   },
//   {
//     id: 1,
//     username: "abc",
//     userImg: "https://avatars.dicebear.com/api/human/zzz.svg",
//     img: "https://avatars.dicebear.com/api/jdenticon/s2.svg",
//     caption: "This is Dope!",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
