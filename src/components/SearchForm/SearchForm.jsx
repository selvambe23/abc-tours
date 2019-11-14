import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  './SearchForm.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

function SearchForm(props) {
  const classes = useStyles();
  const [checkInDate, handleCheckInChange] = useState(new Date());
  const [checkOutDate, handleCheckOutChange] = useState(new Date());
  return (
    <Fragment>
        <DatePicker
            autoOk
            label="Checkin Date"
            clearable
            disablePast
            value={checkInDate}
            onChange={handleCheckInChange}
        />
        <DatePicker
            autoOk
            label="Checkout Date"
            clearable
            disablePast
            value={checkOutDate}
            onChange={handleCheckOutChange}
        />
        <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={()=> { props.actions.searchFormRequest({checkInDate, checkOutDate})}}
        >
            Search
      </Button>
    </Fragment>
  );
}

export default SearchForm;