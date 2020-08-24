import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import styles from "./styles";

const DateTimeComponent = props => {
  const [datetime, setDatetime] = useState(new Date());

  const handleChange = (newDatetime) => {
    setDatetime(newDatetime)
    props.handleChange(newDatetime);
  }

  return (
    <>
      <DateTimePicker
        value={datetime}
        onChange={handleChange}
        maxDetail="minute"
        disableClock={true}
      />
      <style jsx>{styles}</style>
    </>
  )
}

const DateTime = DateTimeComponent;
export default DateTime;