import { Avatar, Text, Box, SimpleGrid } from "@chakra-ui/core";

const FoundersComponent = () => {
  return (
    <SimpleGrid minChildWidth="120px" columns={4}>
      <Box pb="1rem">
        <Avatar size="xl" src="shanne.jpeg" />
        <Text pt="0.5rem" fontSize="lg" fontFamily="Kaushan Script">Shanne Low</Text>
      </Box>
      <Box pb="1rem">
        <Avatar size="xl" src="dawn.jpeg" />
        <Text pt="0.5rem" fontSize="lg" fontFamily="Kaushan Script">Dawn Yeoh</Text>
      </Box>
      <Box pb="1rem">
        <Avatar size="xl" src="rachel.jpeg" />
        <Text pt="0.5rem" fontSize="lg" fontFamily="Kaushan Script">Rachel Lee</Text>
      </Box>
      <Box pb="1rem">
        <Avatar size="xl" src="yuli.jpeg" />
        <Text pt="0.5rem" fontSize="lg" fontFamily="Kaushan Script">Khoo Yu Li</Text>
      </Box>
    </SimpleGrid>
  )
}

const Founders = FoundersComponent;
export default Founders;