import data from "../data/info";
import { Box, Text, Divider } from "@chakra-ui/core";
import info from "../data/info";
import Founders from "../components/Founder";

const About = () => {
  return (
    <Box textAlign="center">
      <Text fontSize="xl" fontFamily="Kaushan Script">Mission</Text>
      <Text>{info.mission}</Text>
      <Divider pt="1rem" />
      <Text fontSize="xl" fontFamily="Kaushan Script" p="0.75rem">Our Story</Text>
      <Founders />
      <Text>{data.about}</Text>
    </Box>
  )
}

export default About;