import {
  Button,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
} from "@chakra-ui/core";
import { map } from "lodash";
import { useForm, Controller } from "react-hook-form";
import menu from "../data/menu";
import DateTime from "../components/DateTimePicker";
import OrderItem from "../components/OrderItem";

const Order = () => {
  const { items } = menu;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired mb="0.5rem">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" />
      </FormControl>

      <FormControl isRequired mb="0.5rem">
        <FormLabel htmlFor="contact">Contact Number</FormLabel>
        <Input id="contact" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="items">Items</FormLabel>
      </FormControl>
      <CheckboxGroup>
        {map(items, ({ name, price }) => {
          return <OrderItem key={name} item_name={name} item_price={price} />
        })}
      </CheckboxGroup>

      <FormControl isRequired mt="0.5rem" mb="0.5rem">
        <FormLabel htmlFor="address">Delivery Address</FormLabel>
        <Input id="address" />
      </FormControl>

      <FormControl isRequired mb="0.5rem">
        <FormLabel>Delivery Date and Time</FormLabel>
        <DateTime />
      </FormControl>

      <FormControl mb="0.5rem">
        <FormLabel htmlFor="remarks">Remarks</FormLabel>
        <Input id="remarks" />
      </FormControl>

      <Button isFullWidth type="submit" mt="1rem" style={{ position: "sticky", bottom: "24px" }}>
        Submit Order
      </Button>
    </form>
  )
}

export default Order;