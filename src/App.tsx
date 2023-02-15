import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./entities/types";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";
import PostFilter from "./components/PostFilter";

interface Filter {
  sort: "body" | "title";
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
  //const [selectedSort, setSelectedSort] = useState<"" | "body" | "title">("");
  // const [searchQuery, setSearchQuery] = useState("");
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

  // const sortPosts = (sort: string) => {
  //   if (sort === "body" || sort === "title") {
  //     setSelectedSort(sort);
  //   }
  // };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          title="List of posts"
          posts={sortedAndSearchedPosts}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}

export default App;
