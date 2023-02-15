import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./entities/types";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "JS",
      body: "doloribus incidunt placeat debitis ut iste possimus consequuntur saepe omnis voluptatum consectetur numquam lauda",
    },
    {
      id: 2,
      title: "JS",
      body: "amet consectetur adipisicing elit. Tenetur ea ducimus vero voluptatibus vitae libero voluptas quam explicabo harum consectetur voluptatum, numquam ut aut ex qui exercitationem perspiciati ",
    },
    {
      id: 3,
      title: "JS",
      body: "ipsum dolor, sit amet consectetur adipisicing elit. Vel veritatis fuga et, facilis incidunt aspernatur quae optio exercitationem ipsa",
    },
  ]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} title="List of posts" posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}

export default App;
