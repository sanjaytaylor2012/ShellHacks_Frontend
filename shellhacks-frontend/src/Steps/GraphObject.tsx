import {
  Flex,
  Stack,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

type GraphObjectProps = { graph: string; score: number; name: string };

const GraphObject: React.FC<GraphObjectProps> = ({ score, graph, name }) => {
  let colorCircle = "green.400";
  if (50 <= score && score < 75) {
    colorCircle = "yellow.300";
  } else if (score < 50) {
    colorCircle = "red.500";
  }

  return (
    <Stack align="center" justify={"center"}>
      <Image src={graph} />
      <Flex align="center">
        <CircularProgress size="50px" value={score} color={colorCircle} mr={3}>
          <CircularProgressLabel>{score}</CircularProgressLabel>
        </CircularProgress>
        <Text align="center">{name}</Text>
      </Flex>
    </Stack>
  );
};
export default GraphObject;
