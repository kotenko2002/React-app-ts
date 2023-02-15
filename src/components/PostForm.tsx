import { useState } from "react";
import { Post } from "../entities/types";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

interface PostFormProps {
  create(newPost: Post): void;
}

const PostForm = ({ create }: PostFormProps) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newPost: Post = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form action="">
      <Input
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
        type="text"
        placeholder="Title name"
      />
      <Input
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
        type="text"
        placeholder="Body description"
      />
      <Button onClick={addNewPost}>Create</Button>
    </form>
  );
};

export default PostForm;
