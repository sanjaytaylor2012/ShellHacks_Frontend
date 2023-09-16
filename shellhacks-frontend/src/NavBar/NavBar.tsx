import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import "@fontsource/dm-serif-text";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  return (
    <Flex
      bg="white"
      height="55px"
      padding="10px 20px"
      align="center"
      justify={"space-between"}
    >
      <Text
        backgroundImage="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,157,153,0.7989320728291316) 38%, rgba(44,153,236,0.6488413547237077) 62%);"
        fontSize={20}
        fontWeight={700}
        cursor="pointer"
        onClick={() => router.push("/")}
        backgroundClip="text"
        color="transparent"
        fontFamily={"DM Serif Text"}
      >
        Coach.ai
      </Text>
      <Button onClick={() => router.push("/try")} variant={"main"}>
        Try Now
      </Button>
    </Flex>
  );
};
export default Navbar;
