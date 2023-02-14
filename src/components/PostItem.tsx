import { IPost } from "../types/types";

interface PostItemProps {
  post: IPost;
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
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
