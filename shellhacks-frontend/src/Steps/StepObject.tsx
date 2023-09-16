import { Flex, Text } from "@chakra-ui/react";
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
    <Text
      backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.7989320728291316) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
      backgroundClip="text"
      color="transparent"
      fontSize={30}
      _hover={{ opacity: 0.5 }}
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
