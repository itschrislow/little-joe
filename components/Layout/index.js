import React from "react";
import Head from "next/head";
import styled from '@emotion/styled';
import { Box, Flex } from "@chakra-ui/core";
import data from "../../data/info"
import Header from "../Header";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const LayoutComponent = props => {
  return (
    <Box className="layout-wrapper" alignItems="center">
      <Head>
        <title>{data.title}</title>
      </Head>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        as="nav"
        p={8}
        pb={0}
        mt={0}
        mx="auto"
      >
        <Header />
      </StickyNav>
      <Box maxWidth="900px" h="100vh" p="1.5rem" pt={0} m="auto">
        {props.children}
      </Box>
    </Box>
  );
};

export default LayoutComponent;
