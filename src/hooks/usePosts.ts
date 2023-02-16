import { useMemo } from "react";
import { Post } from "../models/Post";
import { SortOption } from "../types/types";

const useSortedPosts = (posts: Post[], sort: SortOption) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort])
            );
        }

        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts: Post[], sort: SortOption, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {  
        return sortedPosts.filter((post) =>
            post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}