import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/core";
import data from "../../data/info"
import Header from "../Header";

const LayoutComponent = props => {
  return (
    <div className="layout-wrapper">
      <Head>
        <title>{data.title}</title>
      </Head>
      <Box h="100vh" p="1.5rem">
        <Header />
        {props.children}
      </Box>
    </div>
  );
};

export default LayoutComponent;
