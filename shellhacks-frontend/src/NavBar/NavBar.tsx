import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import "@fontsource/dm-serif-text";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  return (
    <Flex
      bg="#292929"
      height="55px"
      padding="10px 20px"
      align="center"
      justify={"space-between"}
    >
      <Text
        backgroundImage="linear-gradient(90deg, rgba(79,71,228,1) 0%, rgba(20,241,229,0.7989320728291316) 100%);"
        fontSize={20}
        fontWeight={700}
        cursor="pointer"
        onClick={() => router.push("/")}
        backgroundClip="text"
        color="transparent"
        fontFamily={"DM Serif Text"}
      >
        Sportify
      </Text>
      <Button onClick={() => router.push("/try")} variant={"main"}>
        Try Now
      </Button>
    </Flex>
  );
};
export default Navbar;
