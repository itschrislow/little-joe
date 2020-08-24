import { useState } from "react";
import {
  Box,
  Checkbox,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text
} from "@chakra-ui/core";

const OrderItemComponent = ({ item_name, item_price }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SimpleGrid column={2} minChildWidth="80px">
      <Box width="250px">
        <Checkbox value={item_name} h="40px" onChange={() => { setIsChecked(!isChecked) }}>{item_name} - RM {item_price}</Checkbox>
      </Box>
      <Box>
        {isChecked && (
          <NumberInput defaultValue={1} min={1} max={5} w="5rem" style={{ float: "right" }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        )}
      </Box>
    </SimpleGrid>
  )
}

const OrderItem = OrderItemComponent;
export default OrderItem;