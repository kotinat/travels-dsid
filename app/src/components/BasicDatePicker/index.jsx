import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const BasicDatePicker = (props) => {
  const handleDateChange = (date) => {
    props.onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
      inputVariant="outlined"
        disablePast
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        label={props.label}
        id={props.id}
        value={props.selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        minDate={props.minDate ? props.minDate : new Date()}
      />
    </MuiPickersUtilsProvider>
  );
};

export default BasicDatePicker;
