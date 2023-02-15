import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./models/Post";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import { SortOption } from "./types/types";

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

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
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
