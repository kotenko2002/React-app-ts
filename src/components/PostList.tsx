import { IPost } from "../types/types";
import PostItem from "./PostItem";

interface PostListProps {
  title: string;
  posts: IPost[];
}

const PostList = ({ title, posts }: PostListProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
