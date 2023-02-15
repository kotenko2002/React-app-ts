import { Post } from "../models/Post";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
interface PostListProps {
  title: string;
  posts: Post[];
  remove(post: Post): void;
}

const PostList = ({ title, posts, remove }: PostListProps) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No posts</h1>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} post={post} postNumber={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
