import { useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, Flex } from "@chakra-ui/core";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/menu")
  }, []);

  return (
    <Flex h="80vh" align="center" justify="center">
      <Spinner />
    </Flex>
  );
}

export default Home;