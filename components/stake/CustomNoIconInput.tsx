import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

interface InputProps {
  buttonName: string;
  buttonColor: string;
  buttonTextColor: string;
  placeHolder?: string;
  width?: string;
}

const CustomNoIconInput = (props: InputProps) => {
  const { buttonName, buttonColor, buttonTextColor, placeHolder, width} = props;
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: !!width ? width: '100%', background: 'white', }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'black' }}
        inputProps={{ 'aria-label': 'search google maps' }}
        placeholder={placeHolder}
      />
      <Button variant="contained" type="submit" sx={{ p: '10px', color: buttonTextColor, fontWeight: 'bold', background: buttonColor }}>
        {buttonName}
      </Button>
    </Paper>
  );
}

export default CustomNoIconInput;