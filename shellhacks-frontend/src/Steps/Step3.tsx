import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import GraphObject from "./GraphObject";

type Step3Props = { result: any };

const Step3: React.FC<Step3Props> = ({ score, result }) => {
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
          Your accuracy is {score}%. Check out your similarity graphs to see how
          close you matched the pros!
        </Text>
        <Grid
          mt={4}
          templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4} // Add gap between grid items (adjust as needed)
        >
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
          <GraphObject
            name="Left arm angle"
            graph="basketball1.png"
            score={75}
          />
        </Grid>
      </Stack>
    </Flex>
  );
};
export default Step3;
