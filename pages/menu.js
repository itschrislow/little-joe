import MenuItem from "../components/MenuItem"
import { SimpleGrid } from "@chakra-ui/core";
import menu from "../data/menu"
import { map } from "lodash";

const Menu = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="1.5rem" mt="1.3rem" mb="1.3rem" style={{ justifyItems: "center" }}>
      {map(menu.items, ({ name, price, img, desc }) => {
        return (
          <MenuItem name={name} price={price} img={img} desc={desc} />
        );
      })}
    </SimpleGrid>
  );
}

export default Menu;