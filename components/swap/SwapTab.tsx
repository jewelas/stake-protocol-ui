import { Box, IconButton, Button, buttonBaseClasses } from '@mui/material';
import * as React from 'react';
// icons
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//  components
import TokenDlg from 'components/common/TokenDlg';

import { useMediaQuery } from 'react-responsive';

const SwapTab = () => {
  const [openTokenDlg, setOpenTokenDlg] = React.useState(false);
  const [tokenList, setTokenList] = React.useState([
    {
      name: 'bnb',
      symbol: 'BNB'
    },
    {
      name: 'stake',
      symbol: 'STK'
    }
  ])
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  return (
    <>
      {/* token select dialog */}
      <TokenDlg 
        open={openTokenDlg} 
        handleClose={() => setOpenTokenDlg(false)}
        tokens={tokenList}
      />
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          paddingTop: '40px'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'primary.main',
            filter: 'blur(15px)',
            width: isResp520?'100%':'500px',
            height: isResp520?'auto':'500px',
            left: 0,
            right: 0,
            margin: 'auto',
            opacity: 0.5
          }}
        >
        </Box>
        {/* swap card */}
        <Box
          sx={{
            position: 'absolute',
            border: 'solid 3px',
            width: isResp520?'100%':'500px',
            height: isResp520?'auto':'500px',
            borderRadius: '16px',
            borderColor: 'secondary.main',
            backgroundColor: 'background.paper',
            left: 0,
            right: 0,
            margin: 'auto',
            padding: '25px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textTransform: 'capitalize'
            }}
          >
            {/* title */}
            <Box
              sx={{
                fontSize: 'h5.fontSize',
                fontWeight: 'bold'
              }}
            >
              swap
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconButton sx={{ color: 'text.primary' }}>
                <RefreshIcon />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
          {/* Swap card content */}
          <Box
            sx={{
              marginTop: '20px'
            }}
          >
            {/* select swap token */}
            <Box
              sx={{
                width: '100%',
                height: isResp520?'auto':'120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px',
                padding: isResp520?'10px':'20px'
              }}
            >
              {/* label */}
              <Box>
                From :
              </Box>
              {/* select token */}
              <Box
                sx={{
                  display: 'flex',
                  marginTop: isResp520?'0px':'20px'
                }}
              >
                {/* input amount */}
                <Box>
                  <input
                    style={{
                      border: 'none',
                      outline: 'none',
                      height: '30px',
                      fontSize: '20px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      width: '100%'
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button sx={{ display: 'flex', color: 'text.primary', paddingTop: 0, fontWeight: 'bold', fontSize: '18px' }}>
                    <Box>BNB</Box>
                    <Box sx={{ paddingTop: '10px' }}>
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* change button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <IconButton sx={{ color: 'primary.main' }}>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            {/* select target token */}
            <Box
              sx={{
                width: '100%',
                height: isResp520?'auto':'120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px',
                padding: isResp520?'10px':'20px'
              }}
            >
              {/* label */}
              <Box>
                To :
              </Box>
              {/* select token */}
              <Box
                sx={{
                  display: 'flex',
                  marginTop: isResp520?'0px':'20px'
                }}
              >
                {/* input amount */}
                <Box>
                  <input
                    style={{
                      border: 'none',
                      outline: 'none',
                      height: '30px',
                      fontSize: '20px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      width: '100%'
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button sx={{ display: 'flex', color: 'text.primary', paddingTop: 0, fontWeight: 'bold', fontSize: '18px' }}>
                    <Box>BNB</Box>
                    <Box sx={{ paddingTop: '10px' }}>
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ marginTop: '25px' }}
          >
            <Button fullWidth
              variant="contained"
              color="secondary"
              sx={{
                height: '50px',
                borderRadius: '16px',
                fontWeight: 'bold',
                color: 'text.primary',
                fontSize: 'h6.fontSize'
              }}
            >Connect Wallet</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SwapTab;