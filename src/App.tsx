import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./models/Post";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import { SortOption } from "./types/types";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

interface Filter {
  sort: SortOption;
  query: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filter>({ sort: "title", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState<boolean>(false);
  const [fetching, isLoading] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetching();
  }, []);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Button style={{ marginTop: "15px" }} onClick={() => setModal(true)}>
        Create new post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          title="List of posts"
          posts={sortedAndSearchedPosts}
        />
      )}
    </div>
  );
}

export default App;
