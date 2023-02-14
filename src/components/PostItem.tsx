import { Post } from "../entities/types";
import Button from "./UI/button/Button";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {post.id}. {post.title}
          </strong>
          <div className="post__content">{post.body}</div>
        </div>
        <div className="post__btn">
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
