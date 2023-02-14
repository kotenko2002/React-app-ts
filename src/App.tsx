import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { IPost } from "./types/types";

function App() {
  const [posts, setPosts] = useState<IPost[]>([
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

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="Title name" />
        <input type="text" placeholder="Body description" />
        <button>Create</button>
      </form>
      <PostList title="list #1" posts={posts} />
    </div>
  );
}

export default App;
