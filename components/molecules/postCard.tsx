import { Card, Image, Text, Badge, Group, Avatar } from "@mantine/core";
import { PostData } from "../../types/interfaces";
import Link from "next/link";
import { useStyles } from "@/styles/styles";

interface PostCardProps {
  data: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const { classes } = useStyles();
  const postDate = new Date(data ? data.createdAt : 0);
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.cardPost}
      key={data?.id}
    >
      <Card.Section>
        <Link href={`/posts/${data?.id}`}>
          <Image src={data?.postImage} height={160} alt="postImage" />
        </Link>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <div className={classes.userContent}>
          <Avatar size="md" src={data?.authorAvatar} alt="avatar" radius="xl" />
          <Text weight={500}>{data?.authorName}</Text>
        </div>

        <Badge color="blue" variant="light">
          {postDate.toLocaleDateString()}
        </Badge>
      </Group>
      <Link href={`/posts/${data?.id}`}>
        <Text size="sm" color="dimmed">
          {data?.postText}
        </Text>
      </Link>
    </Card>
  );
};

export default PostCard;
