import {
  Flex,
  Stack,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Text, Tooltip,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

type GraphObjectProps = { graph: string; score: number; name: string; words_wisdom: any };

const GraphObject: React.FC<GraphObjectProps> = ({ score, graph, name, words_wisdom }) => {
  // const [colorCircle, setColorCircle] = useState("green.400");
  // const [scoreNum, setScoreNum] = useState(score);
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   setMessage(words_wisdom["good"][name.toLowerCase()]);
  //   setColorCircle("green.400");
  //   setScoreNum(Math.round(score * 100));
  //   setColorCircle("green.400");
  //   if (50 <= scoreNum && scoreNum < 75) {
  //     setColorCircle("yellow.300");
  //   } else if (scoreNum < 50) {
  //     setMessage(words_wisdom["bad"][name.toLowerCase()])
  //     setColorCircle("red.500");
  //   }
  // }, [])

    // let message = words_wisdom["good"][name.toLowerCase()];
    // let colorCircle = "green.400";
    // score = Math.round(score * 100);
    // if (50 <= score && score < 75) {
    //     colorCircle = "yellow.300";
    // } else if (score < 50) {
    //     colorCircle = "red.500";
    //     words_wisdom["bad"][name.toLowerCase()]
    // }

    let sc = Math.round(score * 100);

  return (
    <Stack align="center" justify={"center"}>
      <Tooltip hasArrow label={words_wisdom[(sc < 50 ? "bad" : "good")][name.toLowerCase()]}>
        <Image src={graph} />
      </Tooltip>
      <Flex align="center">
        <CircularProgress size="50px" value={sc} color={(sc < 50 ? "red.500" : (sc < 75 ? "yellow.300" : "green.400"))} mr={3}>
          <CircularProgressLabel color={"white"}>{sc}%</CircularProgressLabel>
        </CircularProgress>
        <Text color={"white"} align="center">{name}</Text>
      </Flex>
    </Stack>
  );
};
export default GraphObject;
