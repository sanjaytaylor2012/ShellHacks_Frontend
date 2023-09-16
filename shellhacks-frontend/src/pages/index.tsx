import { Inter } from "next/font/google";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import "@fontsource/roboto-condensed";
import "@fontsource/dm-serif-text";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex width="100%" height="70vh" backgroundColor="#f0f0f0" align="center">
        <Flex ml={10} mr={10}>
          <Flex width="60%" flexWrap="wrap">
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Unlock
            </Text>
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Your
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.23529411764705888) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
              backgroundClip="text"
              color="transparent"
              fontWeight={800}
              fontFamily={"DM Serif Text"}
              fontSize={40}
            >
              Potential
            </Text>
            <Text
              mr={3}
              color="black"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              with
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.23529411764705888) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
              backgroundClip="text"
              color="transparent"
              fontWeight={800}
              fontFamily={"DM Serif Text"}
              fontSize={40}
            >
              Coach.ai
            </Text>
            <Text mt={4} color="#878787">
              Coach.ai is an intelligent coach that leverages AI to give you
              feedback on your sports performance. Upload a video and give it a
              try!
            </Text>
            <Flex mt={6} gap={4}>
              <Button backgroundColor="#2c99ec" _hover={{ color: "#185c8f" }}>
                Get Started
              </Button>
              <Button
                backgroundColor="#d9d9d9"
                color="black"
                _hover={{ color: "#185c8f" }}
              >
                How it Works
              </Button>
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height="70vh"
        backgroundColor="#143a57"
        direction={{ base: "column", md: "row" }}
      >
        <Flex m={10}>
          <Stack>
            <Text color="#878787" mb={-2}>
              TECHNOLOGY
            </Text>
            <Text fontSize={30} fontWeight={700}>
              Intelligent coaching, brought to you
            </Text>
            <Text mt={4} color="#d6d6d6">
              Coach.ai revolutionizes sports coaching through artificial
              intelligence. By uploading your performance videos, you can tap
              into a world of data-driven feedback, enhancing your skills and
              achieving your goals. We deciphers nuances in your technique,
              dissect your movements, and detect patterns in your performance
              that might have otherwise remained hidden. Every kick, every
              swing, every sprint – all are meticulously scrutinized by
              Coach.ai's AI engine.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
