import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetMatchesQuery } from "@/services/valorant";
import Spinner from "@/components/atoms/spinner";
import MatchCard from "@/components/molecules/matchCard";
import { Container } from "@mantine/core";

const PlayerMatchesDetails = () => {
  const router = useRouter();
  const { region, name, tag } = router.query;

  // Fetch recent matches of the player using the playerId
  const { data, isLoading, isError } = useGetMatchesQuery({
    version: "v3", // Replace with the correct version
    region: region as string,
    name: name as string,
    tag: tag as string,
  });

  if (isLoading) {
    return <Spinner />;
  }

  console.log(data);
  return (
    <div>
      {/* Display recent matches of the player */}
      <h1>
        Recent Matches of {name} {tag}{" "}
      </h1>
      <Container size="sm" style={{ margin: "auto" }}>
        {data?.data?.map((match: any, index: any) => (
          <MatchCard key={index} matchData={match} name={name} tag={tag} />
        ))}
      </Container>
    </div>
  );
};

export default PlayerMatchesDetails;
