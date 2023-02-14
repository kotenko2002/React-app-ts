import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./entities/types";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

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

  const addPost = () => {
    console.log(777);
  };

  return (
    <div className="App">
      <form action="">
        <Input type="text" placeholder="Title name" />
        <Input type="text" placeholder="Body description" />
        <Button disabled onClick={addPost}>
          Create
        </Button>
      </form>
      <PostList title="list #1" posts={posts} />
    </div>
  );
}

export default App;
