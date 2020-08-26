import React, { useEffect } from "react";
import NextLink from 'next/link';
import data from "../../data/info";
import { useRouter } from "next/router";
import { Stack, Flex, Box, Divider, Text, Avatar } from "@chakra-ui/core";
import styles from "./styles";

const HeaderComponent = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname)
  }, [router.pathname]);

  return (
    <Box w="100%">
      <Flex flexDirection="column" align="center">
        <NextLink href="/menu" passHref>
          <Stack isInline align="center" style={{ cursor: "pointer" }}>
            <Avatar name={data.title} src={data.logo}></Avatar>
            <Text fontSize="4xl">{data.title}</Text>
          </Stack>
        </NextLink>
      </Flex>
      <Divider />
      <Flex justify="center">
        <NextLink href="/about" passHref>
          <Text
            className={router.pathname === "/about" ? "active" : ""}
            pl="0.5rem"
            pr="0.5rem"
            style={{ cursor: "pointer" }}
          >
            About Us
          </Text>
        </NextLink>
        <NextLink href="/menu" passHref>
          <Text
            className={router.pathname === "/menu" ? "active" : ""}
            pl="0.5rem"
            pr="0.5rem"
            style={{ cursor: "pointer" }}
          >
            Menu
          </Text>
        </NextLink>
        <NextLink href="/order" passHref>
          <Text
            className={router.pathname === "/order" ? "active" : ""}
            pl="0.5rem"
            pr="0.5rem"
            style={{ cursor: "pointer" }}
          >
            Order Now
          </Text>
        </NextLink>
      </Flex>
      <Divider />
      <style jsx>{styles}</style>
    </Box>
  );
};

export default HeaderComponent;
