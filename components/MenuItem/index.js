import { Box, Image, Text } from "@chakra-ui/core";

const MenuItemComponent = props => {
  const { name, price, img, desc } = props;

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image size="sm" height="300px" objectFit="cover" src={img} alt={name} />
      <Box p="10px">
        <Text style={{ float: "right" }}>RM {price}</Text>
        <Text>{name}</Text>
        <Text>{desc}</Text>
      </Box>
    </Box>
  );
}

const MenuItem = MenuItemComponent;
export default MenuItem;