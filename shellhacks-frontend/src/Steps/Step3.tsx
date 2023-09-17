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

const Step3: React.FC<Step3Props> = ({ result }) => {
  let colorCircle = "green.400";
  if (50 <= result["overall_score"] && result["overall_score"] < 75) {
    colorCircle = "yellow.300";
  } else if (result["overall_score"] < 50) {
    colorCircle = "red.500";
  }

  console.log(result);

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
        <CircularProgress size="100px" value={Math.round(result["overall_score"] * 100)} color={colorCircle}>
        <CircularProgressLabel color={"white"}>{Math.round(result["overall_score"] * 100)}%</CircularProgressLabel>
        </CircularProgress>
        <Text fontWeight={600} color={"white"} align="center">
          Your accuracy is {Math.round(result["overall_score"]* 100)}%. Check out your similarity graphs to see how
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
            graph={result["Left arm angle"]}
            score={result["Left arm angle score"]}
          />
          <GraphObject
            name="Left arm bend angle"
            graph={result["Left arm bend angle"]}
            score={result["Left arm bend angle score"]}
          />
          <GraphObject
              name="Left leg bend angle"
              graph={result["Left leg bend angle"]}
              score={result["Left leg bend angle score"]}
          />
          <GraphObject
            name="Left waist bend angle"
            graph={result["Left waist bend angle"]}
            score={result["Left waist bend angle score"]}
          />
          <GraphObject
            name="Right arm angle"
            graph={result["Right arm angle"]}
            score={result["Right arm angle score"]}
          />
          <GraphObject
            name="Right arm bend angle"
            graph={result["Right arm bend angle"]}
            score={result["Right arm bend angle score"]}
          />
          <GraphObject
            name="Right leg bend angle"
            graph={result["Right leg bend angle"]}
            score={result["Right leg bend angle score"]}
          />
          <GraphObject
            name="Right waist bend angle"
            graph={result["Right waist bend angle"]}
            score={result["Right waist bend angle score"]}
          />
        </Grid>
      </Stack>
    </Flex>
  );
};
export default Step3;
