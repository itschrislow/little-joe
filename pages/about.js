import data from "../data/info";
import { Box, Image } from "@chakra-ui/core";

const About = () => {
  return (
    <>
      <Box
        overflow="hidden"
        rounded="lg"
        mt="0.5rem"
        mb="0.75rem"
      >
        <Image src="/about.jpeg" objectFit="cover" />
      </Box>
      <p>{data.about}</p>
    </>
  )
}

export default About;