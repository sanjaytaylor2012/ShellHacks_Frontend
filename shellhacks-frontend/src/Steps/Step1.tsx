import { Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { isJSDocPropertyLikeTag } from "typescript";
import "@fontsource/dm-serif-text";
import StepObject from "./StepObject";

type Step1Props = {
  setCurrentStep: (input: number) => void;
  setCurrentSport: (input: string) => void;
  currentSport: string;
};
const Step1: React.FC<Step1Props> = ({
  setCurrentStep,
  setCurrentSport,
  currentSport,
}) => {
  const handleMouseEnter = (sport: string) => {
    setCurrentSport(sport);
  };

  const handleMouseLeave = () => {
    setCurrentSport("");
  };

  const handleClick = (sport: string) => {
    setCurrentSport(sport);
    setCurrentStep(2);
  };

  return (
    <Flex width={"100%"}>
      <Stack width={{ base: "100%", lg: "30%" }} ml={10}>
        <Text mb={4} color="black" fontWeight={700} fontSize={40}>
          Select Your Sport
        </Text>
        <Stack gap={-1}>
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Baseball"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Basketball"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Boxing"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Clean and Jerk"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Football"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Golf Side View"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Golf Back View"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Push-ups"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Running"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Snatch"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Squat"}
          />
        </Stack>
      </Stack>

      <Flex width="50%" mr="10%" mb={4} display={{ base: "none", lg: "flex" }}>
        {currentSport && (
          <Image objectFit="cover" src={`${currentSport}.png`} />
        )}
      </Flex>
    </Flex>
  );
};
export default Step1;
