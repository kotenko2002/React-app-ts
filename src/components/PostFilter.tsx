import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

interface PostFilterProps {
  filter: {
    sort: "body" | "title";
    query: string;
  };
  setFilter(filter: { sort: "body" | "title"; query: string }): void;
}

const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) => {
          if (selectedSort === "body" || selectedSort === "title") {
            setFilter({ ...filter, sort: selectedSort });
          }
        }}
        defaultValue="Sort"
        options={[
          { name: "By title", value: "title" },
          { name: "By body", value: "body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
