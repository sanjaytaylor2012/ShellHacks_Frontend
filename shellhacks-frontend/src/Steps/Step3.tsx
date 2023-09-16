import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Step3Props = { score: number };

const Step3: React.FC<Step3Props> = ({ score }) => {
  let colorCircle = "green.400";
  if (50 <= score && score < 75) {
    colorCircle = "yellow.300";
  } else if (score < 50) {
    colorCircle = "red.500";
  }

  return (
    <Flex align="center" justify="center" height="100%" width="100%">
      <Stack
        align="center"
        justify="center"
        m={5}
        backgroundColor="gray.800"
        borderRadius={30}
        p={3}
      >
        <CircularProgress size="100px" value={score} color={colorCircle}>
          <CircularProgressLabel>{score}</CircularProgressLabel>
        </CircularProgress>
        <Text align="center">
          Your accuracy is at {score}%. Check out your similarity graphs to see
          how close you matched the pros!
        </Text>
      </Stack>
    </Flex>
  );
};
export default Step3;
