import data from "../data/info";
import { Image } from "@chakra-ui/core";

const About = () => {
  return (
    <>
      <Image src="/about.jpeg" pt="0.5rem" pb="0.75rem" />
      <p>{data.about}</p>
    </>
  )
}

export default About;