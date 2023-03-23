

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {Get} from "../apimethod/Apimethod" 

export default function MASelect(props) {
  const {
    value,
    datasource,
    onChange,
    label,
    variant,
    disabled,
    apiName,
    displayField,
    valueField,
  } = props;

  const [apiList, SetApiList] = React.useState(
    datasource ? [...datasource] : []
  );

  React.useEffect(() => {
    if (apiName) {
      Get(apiName)
        .then((res) => {
          SetApiList([...res]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant={variant ? variant : "standard"} fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={onChange}
        >
          {apiList && Array.isArray(apiList)
            ? apiList.map((e, i) => (
                <MenuItem
                  key={i}
                  value={
                    valueField ? e[valueField ? valueField : "valueField"] : e
                  }
                >
                  {e[displayField ? displayField : "displayField"]}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </Box>
  );
}