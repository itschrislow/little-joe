import { useRouter } from 'next/router';
import { Box, Image, Text } from "@chakra-ui/core";

const MenuItemComponent = props => {
  const { name, price, img, desc } = props;
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push("/order")}
      maxW="sm"
      overflow="hidden"
      rounded="lg"
      boxShadow="lg"
      style={{ cursor: "pointer" }}
    >
      <Image size="sm" height="300px" objectFit="cover" src={img} alt={name} />
      <Box p="10px">
        <Text fontSize="xl" fontFamily="Kaushan Script" style={{ float: "right" }}>RM {price.toFixed(2)}</Text>
        <Text fontSize="xl" fontFamily="Kaushan Script">{name}</Text>
        <Text>{desc}</Text>
      </Box>
    </Box>
  );
}

const MenuItem = MenuItemComponent;
export default MenuItem;