import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Checkbox,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/core";

const OrderItemComponent = props => {
  const { item_name, item_price } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.handleCheckboxChange(!isChecked);
  }

  const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
    props.handleQuantityChange(newQuantity);
  }

  return (
    <SimpleGrid column={2} minChildWidth="80px">
      <Box width="250px">
        <Checkbox value={item_name} h="50px" onChange={handleCheckboxChange}>
          <Text>{item_name}</Text>
          <Text>RM {item_price.toFixed(2)}</Text>
        </Checkbox>
      </Box>
      <Box>
        {isChecked && (
          <NumberInput onChange={handleQuantityChange} defaultValue={quantity} min={1} max={5} w="5rem" style={{ float: "right" }}>
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