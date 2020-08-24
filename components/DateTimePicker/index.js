import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import styles from "./styles";

const DateTimeComponent = () => {
  const [datetime, setDatetime] = useState(new Date());

  return (
    <>
      <DateTimePicker
        value={datetime}
        onChange={setDatetime}
        maxDetail="minute"
        disableClock={true}
      />
      <style jsx>{styles}</style>
    </>
  )
}

const DateTime = DateTimeComponent;
export default DateTime;