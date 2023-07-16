import { useRouter } from "next/router";
import Spinner from "@/components/atoms/spinner";
import { Container } from "@mantine/core";
import { useGetPostByIdQuery } from "@/services/posts";
import PostCard from "@/components/molecules/postCard";

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useGetPostByIdQuery({
    id: id as string,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post from {data?.authorName}</h1>
      <Container size="sm" style={{ margin: "auto" }}>
        {data ? <PostCard data={data} /> : null}
      </Container>
    </div>
  );
};

export default PostDetails;
