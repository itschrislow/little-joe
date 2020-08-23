import React from "react";
import NextLink from 'next/link';
import data from "../../data/info";
import { Stack, Flex, Box, Divider, Text, Avatar } from "@chakra-ui/core";

const HeaderComponent = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column" align="center">
        <Stack isInline align="center">
          <Avatar></Avatar>
          <Text fontSize="4xl">{data.title}</Text>
        </Stack>
      </Flex>
      <Divider />
      <Flex justify="center">
        <NextLink href="/about" passHref>
          <Text pl="0.5rem" pr="0.5rem">
            About Us
          </Text>
        </NextLink>
        <NextLink href="/menu" passHref>
          <Text pl="0.5rem" pr="0.5rem">
            Menu
          </Text>
        </NextLink>
        <NextLink href="/order" passHref>
          <Text pl="0.5rem" pr="0.5rem">
            Order Now
          </Text>
        </NextLink>
      </Flex>
      <Divider />
    </Box>
  );
};

export default HeaderComponent;
