import { Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { isJSDocPropertyLikeTag } from "typescript";
import "@fontsource/dm-serif-text";
import StepObject from "./StepObject";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    setCurrentSport(sport.toLowerCase());
  };

  const handleMouseLeave = () => {
    setCurrentSport("");
  };

  const handleClick = (sport: string) => {
    setCurrentSport(sport);
    setCurrentStep(2);
  };


  return (
    <Flex width={"100%"} height="100%" justify="space-around" mb={5}>
      <Stack ml={10} width={{ base: "100%", lg: "30%" }}>
        {/* <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <StepObject sport={"Baseball"} />
          <StepObject sport={"Basketball"} />
          <StepObject sport={"Baseball"} />
          <StepObject sport={"Basketball"} />
          <StepObject sport={"Boxing"} />
          <StepObject sport={"Clean and Jerk"} />
          <StepObject sport={"Football"} />
          <StepObject sport={"Golf Side View"} />
          <StepObject sport={"Golf Back View"} />
          <StepObject sport={"Push-ups"} />
          <StepObject sport={"Running"} />
          <StepObject sport={"Snatch"} />
          <StepObject sport={"Squat"} />
        </Carousel> */}
        {/* </Flex> */}
        <Stack gap={-1}>
          <Text
            mb={4}
            fontWeight={700}
            fontSize={40}
            backgroundImage="linear-gradient(90deg, rgba(79,71,228,1) 0%, rgba(20,241,229,0.7989320728291316) 100%);"
            backgroundClip="text"
            color="transparent"
          >
            Select Your Sport
          </Text>
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
            sport={"Running"}
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
            sport={"Snatch"}
          />
          <StepObject
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            sport={"Clean and Jerk"}
          />
        </Stack>
      </Stack>

      <Flex width="40%" mr="10%" mb={4} display={{ base: "none", lg: "flex" }}>
        {currentSport && (
          <Image objectFit="cover" src={`/static/${currentSport}.png`} />
        )}
      </Flex>
    </Flex>
  );
};
export default Step1;
