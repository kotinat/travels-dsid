// import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import TextField from "@material-ui/core/TextField";

const BasicDatePicker = (props) => {
  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    props.setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        label={props.label}
        id={props.id}
        value={props.selectedDate} // props.selectedDate
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
    // <TextField
    //   value={selectedDate}
    //   onChange={setSelectedDate}
    //   type="date"
    //   onClick={setSelectedDate}
    //   format="dd-MM-yyyy"
    // />
  );
};
export default BasicDatePicker;
