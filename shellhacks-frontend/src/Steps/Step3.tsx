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

type Step3Props = { result: any; currentSport: string };

const Step3: React.FC<Step3Props> = ({ result, currentSport }) => {
  let colorCircle = "green.400";
  if (50 <= result["overall_score"] && result["overall_score"] < 75) {
    colorCircle = "yellow.300";
  } else if (result["overall_score"] < 50) {
    colorCircle = "red.500";
  }
  console.log(currentSport);
  console.log(result);

  const reasons: any = {
    Basketball: {
      good: {
        "left arm angle":
          "Your left arm is doing a good job at bracing the ball!",
        "left arm bend angle":
          "You are geting a lot of momentum behind the ball with your left arm!",
        "left leg bend angle":
          "You are getting a lot of power from your left leg!",
        "left waist bend angle":
          "You are exploding off of the ground using your waist!",
        "right arm angle":
          "Your right arm is getting a lot of power behind the ball!",
        "right arm bend angle":
          "Your right arm is giving a lot of momentum to the ball!",
        "right leg bend angle":
          "You are gtting a lot of power from your right leg!",
        "right waist bend angle":
          "You are exploding off of the ground using your waist!",
      },
      bad: {
        "left arm angle":
          "Your left arm could be doing a better job at bracing the ball.",
        "left arm bend angle":
          "You could be getting a lot more force behind the ball by gathering lower.",
        "left leg bend angle":
          "You could push off of the ground harder by bending your left leg more.",
        "left waist bend angle":
          "You could get more force by bending your waist more.",
        "right arm angle":
          "Your right arm could transfer more force to the ball by gathering lower.",
        "right arm bend angle":
          "Your right arm could provide more force to the ball by gathering lower.",
        "right leg bend angle":
          "You could push off of the ground harder by bending your right leg more.",
        "right waist bend angle":
          "You could get more force by bending your waist more.",
      },
    },
    Running: {
      good: {
        "left arm angle":
          "You are minimizing energy loss and maintaining good balance.",
        "left arm bend angle":
          "Your arms are maintaining a consistent angle, and they are moving in a way to maximize momentum and reduce energy consumption",
        "left leg bend angle":
          "You are running in a way to maximize your stride length without over striding.",
        "left waist bend angle":
          "Your legs are striking the ground directly below you, maximizing the power that you are able to harvest from the ground.",
        "right arm angle":
          "You are minimizing energy loss and maintaining good balance.",
        "right arm bend angle":
          "Your arms are maintaining a consistent angle, and they are moving in a way to maximize momentum and reduce energy consumption",
        "right leg bend angle":
          "You are running in a way to maximize your stride length without over striding.",
        "right waist bend angle":
          "Your legs are striking the ground directly below you, maximizing the power that you are able to harvest from the ground.",
      },

      bad: {
        "left arm angle":
          " You may be swinging your arms too much, which can negatively impact balance and lead to excessive energy consumption.",
        "left arm bend angle":
          "Your arms are moving in a way that may lead to excessive energy consumption and poor stability.",
        "left leg bend angle":
          "You are running in a way where you may be over striding or not getting the maximum stride length.",
        "left waist bend angle":
          "You may be over striding. Your strides may be exerting force at an angle, negatively effecting your speed and costing more energy",
        "right arm angle":
          " You may be swinging your arms too much, which can negatively impact balance and lead to excessive energy consumption.",
        "right arm bend angle":
          "Your arms are moving in a way that may lead to excessive energy consumption and poor stability.",
        "right leg bend angle":
          "You are running in a way where you may be over striding or not getting the maximum stride length.",
        "right waist bend angle":
          "You may be over striding. Your strides may be exerting force at an angle, negatively effecting your speed and costing more energy",
      },
    },
    "Golf side view": {
      good: {
        "left arm angle":
          "This means that you keep your arms close to your chest, reducing the amount of variability in your swing.",
        "left arm bend angle":
          "If you are right-handed, you are keeping your arm fully extending, improving your ability to compress the ball. If you are left-handed, you are maintaining a smooth and straight takeaway.",
        "left leg bend angle": "",
        "left waist bend angle": "",
        "right arm angle":
          "This means that you keep your arms close to your chest, reducing the amount of variability in your swing.",
        "right arm bend angle": "",
        "right leg bend angle": "",
        "right waist bend angle": "",
      },
      bad: {
        "left arm angle": "",
        "left arm bend angle": "",
        "left leg bend angle": "",
        "left waist bend angle": "",
        "right arm angle": "",
        "right arm bend angle": "",
        "right leg bend angle": "",
        "right waist bend angle": "",
      },
    },
    "Golf front view": {
      good: {
        "left arm angle":
          "This means that you keep your arms close to your chest, reducing the amount of variability in your swing.",
        "left arm bend angle":
          "If you are right-handed, you are keeping your arm fully extending, improving your ability to compress the ball. If you are left-handed, you are maintaining a smooth and straight takeaway.",
        "left leg bend angle": "",
        "left waist bend angle": "",
        "right arm angle":
          "This means that you keep your arms close to your chest, reducing the amount of variability in your swing.",
        "right arm bend angle": "",
        "right leg bend angle": "",
        "right waist bend angle": "",
      },
      bad: {
        "left arm angle": "",
        "left arm bend angle": "",
        "left leg bend angle": "",
        "left waist bend angle": "",
        "right arm angle": "",
        "right arm bend angle": "",
        "right leg bend angle": "",
        "right waist bend angle": "",
      },
    },
    Squat: {
      good: {
        "left arm angle": "You are holding the barbell properly!",
        "left arm bend angle": "You are supporting the barbell securely!",
        "left leg bend angle": "You are bending your knees the propper amount!",
        "left waist bend angle":
          "You are bending your waist the optimal amount!",
        "right arm angle": "You are holding the barbell properly!",
        "right arm bend angle": "You are supporting the barbell securely!",
        "right leg bend angle":
          "You are bending your knees the propper amount!",
        "right waist bend angle":
          "You are bending your waist the optimal amount!",
      },
      bad: {
        "left arm angle":
          "You should have your arms pointing down to support the barbell better.",
        "left arm bend angle":
          "You should have your arms pointing down to support the barbell better.",
        "left leg bend angle":
          "You probably are not bending your knees enough.",
        "left waist bend angle":
          "You probably are bending your waist too much or too little.",
        "right arm angle":
          "You should have your arms pointing down to support the barbell better.",
        "right arm bend angle":
          "You should have your arms pointing down to support the barbell better.",
        "right leg bend angle":
          "You probably are not bending your knees enough.",
        "right waist bend angle":
          "You probably are bending your waist too much or too little.",
      },
    },
    Baseball: {
      good: {
        "left arm angle": "You are holding the barbell properly!",
        "left arm bend angle": "You are supporting the barbell securely!",
        "left leg bend angle": "You are bending your knees the propper amount!",
        "left waist bend angle":
          "You are bending your waist the optimal amount!",
        "right arm angle": "You are holding the barbell properly!",
        "right arm bend angle": "You are supporting the barbell securely!",
        "right leg bend angle":
          "You are bending your knees the propper amount!",
        "right waist bend angle":
          "You are bending your waist the optimal amount!",
      },
      bad: {
        "left arm angle":
          "You should have your arms pointing down to support the barbell better.",
        "left arm bend angle":
          "You should have your arms pointing down to support the barbell better.",
        "left leg bend angle":
          "You probably are not bending your knees enough.",
        "left waist bend angle":
          "You probably are bending your waist too much or too little.",
        "right arm angle":
          "You should have your arms pointing down to support the barbell better.",
        "right arm bend angle":
          "You should have your arms pointing down to support the barbell better.",
        "right leg bend angle":
          "You probably are not bending your knees enough.",
        "right waist bend angle":
          "You probably are bending your waist too much or too little.",
      },
    },
    snatch: {
      good: {
        "left arm angle":
          "Your arms are positioned to minimize injury and maximize the benefit of your workout.",
        "left arm bend angle":
          "Your arms are explosive, allowing you to get the most out of your workout.",
        "left leg bend angle":
          "Your legs are positioned well to minimize your chances of injury and maximize the benefit of your workout.",
        "left waist bend angle":
          "You are explosive when lifting the barbell upward, allowing you to get the most out of your workout.",
        "right arm angle":
          "Your arms are positioned to minimize injury and maximize the benefit of your workout.",
        "right arm bend angle":
          "Your arms are explosive, allowing you to get the most out of your workout.",
        "right leg bend angle":
          "Your legs are positioned well to minimize your chances of injury and maximize the benefit of your workout.",
        "right waist bend angle":
          "You are explosive when lifting the barbell upward, allowing you to get the most ouf of your workout.",
      },
      bad: {
        "left arm angle":
          "Your arms may angled in a way that may increase your chances of injury.",
        "left arm bend angle":
          "You may not be explosive enough with the barbell as you come up, reducing the impact of your workout. You could try reducing the weight.",
        "left leg bend angle":
          "Your stance may limit your stability, which could cause you to slip.",
        "left waist bend angle":
          "You are not explosive enough upward, reducing the impact of your workout. You could try reducing the weight.",
        "right arm angle":
          "Your arms may angled in a way that may increase your chances of injury.",
        "right arm bend angle":
          "You may not be explosive enough with the barbell as you come up, reducing the impact of your workout.",
        "right leg bend angle":
          "Your stance may limit your stability, which could cause you to slip.",
        "right waist bend angle":
          "You are not explosive enough upward, reducing the impact of your workout. You could try reducing the weight.",
      },
    },
    "Clean and Jerk": {
      good: {
        "left arm angle":
          "Your left arm angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "left arm bend angle":
          "Your left arm bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "left leg bend angle":
          "Your left leg bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "left waist bend angle":
          "Your left waist bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "right arm angle":
          "Your right arm angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "right arm bend angle":
          "Your right arm bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "right leg bend angle":
          "Your right leg bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
        "right waist bend angle":
          "Your right waist bend angle during clean and jerk is well-positioned, aiding in optimal performance.",
      },
      bad: {
        "left arm angle":
          "Adjusting your left arm angle might enhance your clean and jerk technique.",
        "left arm bend angle":
          "Adjusting your left arm bend angle might enhance your clean and jerk technique.",
        "left leg bend angle":
          "Adjusting your left leg bend angle might enhance your clean and jerk technique.",
        "left waist bend angle":
          "Adjusting your left waist bend angle might enhance your clean and jerk technique.",
        "right arm angle":
          "Adjusting your right arm angle might enhance your clean and jerk technique.",
        "right arm bend angle":
          "Adjusting your right arm bend angle might enhance your clean and jerk technique.",
        "right leg bend angle":
          "Adjusting your right leg bend angle might enhance your clean and jerk technique.",
        "right waist bend angle":
          "Adjusting your right waist bend angle might enhance your clean and jerk technique.",
      },
    },
    "Push-ups": {
      good: {
        "left arm angle":
          "Your left arm angle during push-ups is well-positioned, aiding in optimal performance.",
        "left arm bend angle":
          "Your left arm bend angle during push-ups is well-positioned, aiding in optimal performance.",
        "left leg bend angle":
          "Your left leg bend angle during push-ups is well-positioned, aiding in optimal performance.",
        "left waist bend angle":
          "Your left waist bend angle during push-ups is well-positioned, aiding in optimal performance.",
        "right arm angle":
          "Your right arm angle during push-ups is well-positioned, aiding in optimal performance.",
        "right arm bend angle":
          "Your right arm bend angle during push-ups is well-positioned, aiding in optimal performance.",
        "right leg bend angle":
          "Your right leg bend angle during push-ups is well-positioned, aiding in optimal performance.",
        "right waist bend angle":
          "Your right waist bend angle during push-ups is well-positioned, aiding in optimal performance.",
      },
      bad: {
        "left arm angle":
          "Adjusting your left arm angle might enhance your push-ups technique.",
        "left arm bend angle":
          "Adjusting your left arm bend angle might enhance your push-ups technique.",
        "left leg bend angle":
          "Adjusting your left leg bend angle might enhance your push-ups technique.",
        "left waist bend angle":
          "Adjusting your left waist bend angle might enhance your push-ups technique.",
        "right arm angle":
          "Adjusting your right arm angle might enhance your push-ups technique.",
        "right arm bend angle":
          "Adjusting your right arm bend angle might enhance your push-ups technique.",
        "right leg bend angle":
          "Adjusting your right leg bend angle might enhance your push-ups technique.",
        "right waist bend angle":
          "Adjusting your right waist bend angle might enhance your push-ups technique.",
      },
    },
    Football: {
      good: {
        "left arm angle":
          "Your left arm angle during football is well-positioned, aiding in optimal performance.",
        "left arm bend angle":
          "Your left arm bend angle during football is well-positioned, aiding in optimal performance.",
        "left leg bend angle":
          "Your left leg bend angle during football is well-positioned, aiding in optimal performance.",
        "left waist bend angle":
          "Your left waist bend angle during football is well-positioned, aiding in optimal performance.",
        "right arm angle":
          "Your right arm angle during football is well-positioned, aiding in optimal performance.",
        "right arm bend angle":
          "Your right arm bend angle during football is well-positioned, aiding in optimal performance.",
        "right leg bend angle":
          "Your right leg bend angle during football is well-positioned, aiding in optimal performance.",
        "right waist bend angle":
          "Your right waist bend angle during football is well-positioned, aiding in optimal performance.",
      },
      bad: {
        "left arm angle":
          "Adjusting your left arm angle might enhance your football technique.",
        "left arm bend angle":
          "Adjusting your left arm bend angle might enhance your football technique.",
        "left leg bend angle":
          "Adjusting your left leg bend angle might enhance your football technique.",
        "left waist bend angle":
          "Adjusting your left waist bend angle might enhance your football technique.",
        "right arm angle":
          "Adjusting your right arm angle might enhance your football technique.",
        "right arm bend angle":
          "Adjusting your right arm bend angle might enhance your football technique.",
        "right leg bend angle":
          "Adjusting your right leg bend angle might enhance your football technique.",
        "right waist bend angle":
          "Adjusting your right waist bend angle might enhance your football technique.",
      },
    },
  };

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
        <CircularProgress
          size="100px"
          value={Math.round(result["overall_score"] * 100)}
          color={colorCircle}
        >
          <CircularProgressLabel color={"white"}>
            {Math.round(result["overall_score"] * 100)}%
          </CircularProgressLabel>
        </CircularProgress>
        <Text fontWeight={600} color={"white"} align="center">
          Your accuracy is {Math.round(result["overall_score"] * 100)}%. Check
          out your similarity graphs to see how close you matched the pros!
          Orange is you and blue is the optimal
        </Text>
        <video controls>
          <source src={result["annotated"]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Grid
          mt={4}
          templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4} // Add gap between grid items (adjust as needed)
        >
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Left arm angle"
            graph={result["Left arm angle"]}
            score={result["Left arm angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Left arm bend angle"
            graph={result["Left arm bend angle"]}
            score={result["Left arm bend angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Left leg bend angle"
            graph={result["Left leg bend angle"]}
            score={result["Left leg bend angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Left waist bend angle"
            graph={result["Left waist bend angle"]}
            score={result["Left waist bend angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Right arm angle"
            graph={result["Right arm angle"]}
            score={result["Right arm angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Right arm bend angle"
            graph={result["Right arm bend angle"]}
            score={result["Right arm bend angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
            name="Right leg bend angle"
            graph={result["Right leg bend angle"]}
            score={result["Right leg bend angle score"]}
          />
          <GraphObject
            words_wisdom={reasons[currentSport]}
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
