import Navbar from "@/NavBar/NavBar";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex height="55px" width="100%"></Flex>
      <main>{children}</main>
    </>
  );
};

export default Layout;
