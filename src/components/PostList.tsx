import { Post } from "../entities/types";
import PostItem from "./PostItem";

interface PostListProps {
  title: string;
  posts: Post[];
  remove(post: Post): void;
}

const PostList = ({ title, posts, remove }: PostListProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          post={post}
          postNumber={index + 1}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
