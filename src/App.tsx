import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { Post } from "./entities/types";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";

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
  const [selectedSort, setSelectedSort] = useState<"" | "body" | "title">("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }

    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort: string) => {
    if (sort === "body" || sort === "title") {
      setSelectedSort(sort);
    }
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <Select
          value={selectedSort}
          onChange={(sort) => sortPosts(sort)}
          defaultValue="Sort"
          options={[
            { name: "By title", value: "title" },
            { name: "By body", value: "body" },
          ]}
        />
      </div>
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
