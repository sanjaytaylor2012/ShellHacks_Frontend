import { Flex, Text, Image, Stack } from "@chakra-ui/react";
import { Short_Stack } from "next/font/google";
import React from "react";

type StepObjectProps = {
  handleMouseEnter: (input: string) => void;
  handleClick: (input: string) => void;
  handleMouseLeave: () => void;
  sport: string;
};

const StepObject: React.FC<StepObjectProps> = ({
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  sport,
}) => {
  return (
    // <Stack align="center">
    //   <Image src={`${sport}.png`} />
    //    <Text
    //     backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.7989320728291316) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
    //     backgroundClip="text"
    //     color="transparent"
    //     fontFamily={"DM Serif Text"}
    //     cursor="pointer"
    //     fontSize={{ base: 10, md: 30 }}
    //   >
    //     {sport}
    //   </Text>
    // </Stack>
    <Text
      fontSize={30}
      _hover={{ color: "#3830d1" }}
      fontFamily={"DM Serif Text"}
      cursor="pointer"
      onMouseEnter={() => handleMouseEnter(`${sport}`)} // Run the function when the mouse enters
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleClick(`${sport}`)}
    >
      {sport}
    </Text>
  );
};
export default StepObject;
