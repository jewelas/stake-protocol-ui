import * as React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import CustomNoIconInput from './CustomNoIconInput';


const DownlineTab = () => {
   
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          background: '#212121',
          padding: '40px',
          borderRadius: '16px',
          margin: '20px',
        }}
      >
        <CustomNoIconInput
          buttonName="show"
          buttonColor="primary"
          buttonTextColor="white"
          placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
          width="600px"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            marginTop: '10px'
          }}
        >
          <ButtonGroup color="secondary" variant="contained">
            <Button>My address</Button>
            <Button>viw all</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default DownlineTab;