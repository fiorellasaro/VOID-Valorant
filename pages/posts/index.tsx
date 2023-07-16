import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { Container, Input } from "@mantine/core";
import Spinner from "@/components/atoms/spinner";
import { useGetPostsQuery } from "@/services/posts";
import PostCard from "@/components/molecules/postCard";

const SEARCH_DELAY = 500;
const POSTS_PER_SCROLL = 5;

const Posts: NextPage = () => {
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { data, isLoading, isError } = useGetPostsQuery({});
  const handleScroll = () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.innerHeight + window.scrollY);

    if (distanceToBottom < 100 && !isLoadingMore) {
      loadMoreData();
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      const filteredPosts = data?.filter((postData: any) => {
        const authorMatch = postData.authorName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return authorMatch;
      });
      setFilteredData(filteredPosts || []);
    }, SEARCH_DELAY);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchQuery, data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsLoadingMore(false);
  }, [filteredData]);

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
    setIsLoadingMore(true);
  };

  if (isLoading && page === 1) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const endIndex = page * POSTS_PER_SCROLL;
  const loadedPosts = filteredData.slice(0, endIndex);

  return (
    <div>
      <main>
        <Input
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search posts..."
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.redValorant[0],
              },
            },
          })}
          style={{
            marginBottom: "1rem",
            width: "50%",
            alignContent: "center",
            margin: "auto",
            marginTop: "1rem",
          }}
        />
        <Container size="sm" style={{ margin: "auto" }}>
          {loadedPosts.map((postData: any) => (
            <PostCard key={postData.id} data={postData} />
          ))}
        </Container>
        {isLoadingMore && <Spinner />}{" "}
      </main>
    </div>
  );
};

export default Posts;
