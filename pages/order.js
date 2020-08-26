import {
  Button,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
} from "@chakra-ui/core";
import map from "lodash/map";
import { useState } from "react";
import { useForm } from "react-hook-form";
import menu from "../data/menu";
import info from "../data/info";
import DateTime from "../components/DateTimePicker";
import OrderItem from "../components/OrderItem";
import { forEach } from "lodash";

const Order = () => {
  const { items } = menu;
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState(null);
  const [order, setOrder] = useState(
    map(items, ({ name, price }) => {
      return {
        name,
        price,
        checked: false,
        quantity: 1
      }
    })
  );

  const handleCheckboxChange = (index, newCheckbox) => {
    const newOrder = order;
    newOrder[index].checked = newCheckbox;
    setOrder(newOrder);
  }

  const handleQuantityChange = (index, newQuantity) => {
    const newOrder = order;
    newOrder[index].quantity = newQuantity;
    setOrder(newOrder);
  }

  const onSubmit = data => {
    const { phone_number } = info;
    const { name, address } = data;
    const datetime_str = date.toString();
    const day = datetime_str.slice(0, 3);
    const date_str = datetime_str.slice(4, 10);
    const time = datetime_str.slice(16, 21);
    let total = 0;
    let item_str = "";
    forEach(order, ({ name, checked, quantity, price }) => {
      if (checked) {
        total += quantity * price;
        item_str += `${quantity}x ${name}\n`;
      }
    });

    const intro = `Hi! My name is ${name} and I would like to make a purchase.\n\nItems:\n`
    const delivery = `\nDelivery Address:\n${address}\n\nDelivery Date:\n${date_str} (${day})\n\nDelivery Time:\n${time}\n\n`;
    const order_total = `Total:\nRM ${total.toFixed(2)}`;
    const order_msg = intro + item_str + delivery + order_total;

    document.location.href = `https://api.whatsapp.com/send?phone=${phone_number}&text=${escape(order_msg)}`;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired mb="0.5rem">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input name="name" ref={register} />
      </FormControl>

      <FormControl isRequired mb="0.5rem">
        <FormLabel htmlFor="contact">Contact Number</FormLabel>
        <Input name="contact" ref={register} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Items</FormLabel>
      </FormControl>
      <CheckboxGroup>
        {map(items, ({ name, price }, index) => {
          return (
            <OrderItem
              key={index}
              item_name={name}
              item_price={price}
              handleCheckboxChange={(newCheckbox) => handleCheckboxChange(index, newCheckbox)}
              handleQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
            />
          );
        })}
      </CheckboxGroup>

      <FormControl isRequired mt="0.5rem" mb="0.5rem">
        <FormLabel htmlFor="address">Delivery Address</FormLabel>
        <Input name="address" ref={register} />
      </FormControl>

      <FormControl isRequired mb="0.5rem">
        <FormLabel>Delivery Date and Time</FormLabel>
        <DateTime handleChange={setDate} />
      </FormControl>

      <FormControl mb="0.5rem">
        <FormLabel htmlFor="remarks">Remarks</FormLabel>
        <Input name="remarks" ref={register} />
      </FormControl>

      <Button isFullWidth type="submit" mt="1rem" style={{ position: "sticky", bottom: "48px" }}>
        Submit Order
      </Button>
    </form>
  )
}

export default Order;