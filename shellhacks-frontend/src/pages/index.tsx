import { Inter } from "next/font/google";
import { Button, Flex, Stack, Text, Image, Box, Grid } from "@chakra-ui/react";
import "@fontsource/roboto-condensed";
import "@fontsource/dm-serif-text";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Flex
        width="100%"
        pt={{ base: 8, md: "10vh" }}
        pb={{ base: 8, md: "10vh" }}
        backgroundColor="black"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Flex ml={10} mr={10}>
          <Flex flexWrap="wrap">
            <Text
              mr={3}
              color="ebebeb"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Unlock
            </Text>
            <Text
              mr={3}
              color="ebebeb"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              Your
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(79,71,228,1) 0%, rgba(20,241,229,0.7989320728291316) 100%);"
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
              color="ebebeb"
              fontFamily={"Roboto Condensed"}
              fontSize={40}
            >
              with
            </Text>
            <Text
              mr={3}
              backgroundImage="linear-gradient(90deg, rgba(79,71,228,1) 0%, rgba(20,241,229,0.7989320728291316) 100%);"
              backgroundClip="text"
              color="transparent"
              fontWeight={800}
              fontFamily={"DM Serif Text"}
              fontSize={40}
            >
              AthleteAI
            </Text>
            <Text
              fontFamily={"Roboto Condensed"}
              mt={4}
              fontSize={20}
              color="white"
            >
              AthleteAI is an intelligent coach that leverages AI to give you
              feedback on your sports performance. Upload a video and give it a
              try!
            </Text>
            <Flex mt={6} gap={4}>
              <Button variant={"main"} onClick={() => router.push("/try")}>
                Get Started
              </Button>
              <Link offset={0} smooth={true} duration={500} to={"technology"}>
                <Button
                  backgroundColor="#d9d9d9"
                  color="black"
                  _hover={{ color: "#4f47e4", backgroundColor: "#8c8c8c" }}
                >
                  How it Works
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
        <Flex>
          <Box
            m={10}
            as="iframe"
            src={"https://www.youtube.com/embed/qXuP9bv_LYU"}
            width={{ base: "373", md: "500px" }}
            height={{ base: "210", md: "315" }}
          ></Box>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        backgroundColor="#343075"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Image width={{ base: "unset", md: "40%" }} src="runningGuy.png" />
        <Flex align="center" m={10} width={{ base: "unset", md: "60%" }}>
          <Stack>
            <Text id="technology" color="#878787" mb={-2}>
              INTELLIGENCE
            </Text>
            <Text fontSize={30} fontWeight={700}>
              Smart coaching, at your fingertips.
            </Text>
            <Text color="#d6d6d6">
              AthleteAI revolutionizes sports coaching through artificial
              intelligence. By uploading your performance videos, you can tap
              into a world of data-driven feedback, enhancing your skills and
              achieving your goals. We deciphers nuances in your technique,
              dissect your movements, and detect patterns in your performance
              that might have otherwise remained hidden. Every kick, every
              swing, every sprint – all are meticulously scrutinized by
              AthleteAI's AI engine.
            </Text>
            <Grid
              mt={4}
              templateRows="repeat(2, 1fr)" // Create 4 rows
              templateColumns="repeat(2, 1fr)" // Create 4 columns
              gap={4} // Add gap between grid items (adjust as needed)
            >
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Real-Time Assessment
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Capture real-time video footage through your webcam and
                  harness the power of AI to receive instant, data-driven
                  feedback on your performance.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Performance Analysis Report
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  After your training or game, access a comprehensive analysis
                  of your performance, complete with personalized insights and
                  actionable recommendations.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Multi-Sport Support
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Enjoy tailored coaching and analysis across a range of sports,
                  all in one place, empowering you to excel in your athletic
                  pursuits like never before.
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight={700} mb={-2}>
                  Attention to Detail{" "}
                </Text>
                <Text color="#d6d6d6" fontSize={13}>
                  Through a meticulous analysis of your technique and form, we
                  draw comparisons to the skills of Olympic-level athletes. This
                  process allows us to identify areas for improvement.
                </Text>
              </Stack>
            </Grid>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
