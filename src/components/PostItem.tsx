import { Post } from "../models/Post";
import Button from "./UI/button/Button";

interface PostItemProps {
  post: Post;
  postNumber: number;
  remove(post: Post): void;
}

const PostItem = ({ post, postNumber, remove }: PostItemProps) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {postNumber}. {post.title}
          </strong>
          <div className="post__content">{post.body}</div>
        </div>
        <div className="post__btn">
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              remove(post);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
