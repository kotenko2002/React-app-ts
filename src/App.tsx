import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./models/Post";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import { SortOption } from "./types/types";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

interface Filter {
  sort: SortOption;
  query: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "JS",
      body: "doloribus incidunt placeat debitis ut iste possimus consequuntur saepe omnis voluptatum consectetur numquam lauda",
    },
    {
      id: 2,
      title: "Python",
      body: "amet consectetur adipisicing elit. Tenetur ea ducimus vero voluptatibus vitae libero voluptas quam explicabo harum consectetur voluptatum, numquam ut aut ex qui exercitationem perspiciati ",
    },
    {
      id: 3,
      title: "C#",
      body: "ipsum dolor, sit amet consectetur adipisicing elit. Vel veritatis fuga et, facilis incidunt aspernatur quae optio exercitationem ipsa",
    },
  ]);
  const [filter, setFilter] = useState<Filter>({ sort: "title", query: "" });
  const [modal, setModal] = useState<boolean>(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
      <PostList
        remove={removePost}
        title="List of posts"
        posts={sortedAndSearchedPosts}
      />
    </div>
  );
}

export default App;
