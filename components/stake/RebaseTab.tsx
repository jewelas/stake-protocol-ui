import { Grid, Box, Button } from '@mui/material';
import * as React from 'react';
import {useEffect, useRef} from "react";
import CustomInput from './CustomInput';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { RedditTextField } from './RedditTextField';
import { useMediaQuery } from 'react-responsive';
import ReactSpeedometer from 'react-d3-speedometer';

const RebaseTab = () => {
  const [sellAmount, setSellAmount] = React.useState('0');
  const [buyAmount, setBuyAmount] = React.useState('0');
  const speedoMeter = useRef<any>();

  useEffect(() => {
    if(speedoMeter.current) {
      const width = speedoMeter.current.offsetWidth;
      speedoMeter.current.style.height = width+"px";
    }
  },[speedoMeter])

  const handleSellAmount = (e: any) => {
    e.target.value = e.target.value.toString().replace(",", ".").replace(" ", "");
    if (isNaN(e.target.value)) {
      return;
    }
    setSellAmount(e.target.value);
  }

  const handleBuyAmount = (e:any) => {
    e.target.value = e.target.value.toString().replace(",", ".").replace(" ", "");
    if (isNaN(e.target.value)) {
      return;
    }
    setBuyAmount(e.target.value);
  }
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>
          Next rebase in : 24 mins
        </Box>
      </Grid>
      {/* gross faucet value */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: isResp520?'#69696969':'#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Grid container spacing={2}>
            {/* gross faucet value */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'22px':'26px',
                  marginBottom: isResp520?'0px':'30px'
                }}
              >
                Gross Faucet Value (GFV)
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'16px':'20px',
                  marginBottom: isResp520?'5px':'20px'
                }}
              >
                GFV Available
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: isResp520?'400':'bold',
                  fontSize: isResp520?'16px':'28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop Sent */}
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'16px':'20px',
                  marginBottom: isResp520?'5px':'20px'
                }}
              >
                Total Rebase earned
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: isResp520?'400':'bold',
                  fontSize: isResp520?'16px':'28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop received */}
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'16px':'20px',
                  marginBottom: isResp520?'5px':'20px'
                }}
              >
                Gross Claimed
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: isResp520?'400':'bold',
                  fontSize: isResp520?'16px':'28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* team */}
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'16px':'20px',
                }}
              >
                <Box>
                  <Box sx={{ height: '18px', display: 'flex', justifyContent: 'center' }}>
                    Total Rebase
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    Compounded
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: isResp520?'400':'bold',
                  fontSize: isResp520?'16px':'28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: '20px',
            background: isResp520?'#69696969':'#212121',
            borderRadius: '16px'
          }}
        >
          {/* sell */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <Box
              sx={{
                width:'100%'
              }}>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box>
                  Sell Stake
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>Stake Balance: 65,707</Box>
              </Box>
              <CustomInput value={sellAmount} setValue={e=>handleSellAmount(e)} width="100%" icon={<SellIcon />} />
              <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                <Button color="secondary" variant="contained">Sell</Button>
              </Box>
            </Box>
          </Box>
          {/* buy */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <Box 
              sx={{
                width:'100%'
              }}>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box>
                  Buy Stake
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>BNB Balance: 1.452</Box>
              </Box>
              <CustomInput value={buyAmount} setValue={e=>handleBuyAmount(e)} width="100%" icon={<ShoppingBagIcon />} />
              <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                <Button color="secondary" variant="contained">Buy</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: '20px',
            background: isResp520?'#69696969':'#212121',
            borderRadius: '16px',
            height: '100%'
          }}
        >
          description
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: '20px',
            background: isResp520?'#69696969':'#212121',
            borderRadius: '16px',
            height: '100%'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}
                >
                  NERD
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  (Net Elastic Rebase Depletion)
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                Net Depoists
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                -123.3211
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                Current Rebase Rate
              </Box>
              <Box
                sx={{
                  paddingLeft: '50px'
                }}
              >
                (daily)
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                0.2%
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                GFV Depletion
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                no
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                Depletion Amount
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                0 stake
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box 
                ref={speedoMeter}
                sx={{
                  margin: "auto",
                  padding: "10px"
              }}>
                <ReactSpeedometer 
                  fluidWidth={true}
                  startColor="#00ff00"
                  endColor='#ff0000'
                  customSegmentLabels={[
                    {text : ''},
                    {text : ''},
                    {text : ''},
                    {text : ''},
                    {text : ''},
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: '20px',
            background: isResp520?'#69696969':'#212121',
            borderRadius: '16px'
          }}
        >
          <Grid item xs={12}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}
              >
                Calculator
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}
              >
                (estimated)
              </Box>
              <Grid container spacing={2}>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                  <Box
                    sx={{
                      width: isResp520?'100%':'400px'
                    }}
                  >
                    <RedditTextField
                      label="Stake in faucet"
                      defaultValue="0"
                      id="reddit-input"
                      variant="filled"
                      fullWidth
                      style={{ marginTop: 11 }}
                    />
                  </Box>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                  <Box
                    sx={{
                      width: isResp520?'100%':'400px'
                    }}
                  >
                    <RedditTextField
                      label="Price"
                      defaultValue="$2.00"
                      id="reddit-input"
                      variant="filled"
                      fullWidth
                      style={{ marginTop: 11 }}
                    />
                  </Box>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                  <Box
                    sx={{
                      width: isResp520?'100%':'400px'
                    }}
                  >
                    <RedditTextField
                      label="NERD %"
                      defaultValue="100%"
                      id="reddit-input"
                      variant="filled"
                      fullWidth
                      style={{ marginTop: 11 }}
                    />
                  </Box>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                  <Box
                    sx={{
                      width: isResp520?'100%':'400px'
                    }}
                  >
                    <RedditTextField
                      label="How Many Days"
                      defaultValue="30"
                      id="reddit-input"
                      variant="filled"
                      fullWidth
                      style={{ marginTop: 11 }}
                    />
                  </Box>
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'left'}} item xs={7} md={6}>
                  Faucet APY
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={5} md={6}>
                  3,543%
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'left'}} item xs={7} md={6}>
                  Rebase APY
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={5} md={6}>
                  3,543%
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'left'}} item xs={7} md={6}>
                  Estimate Rewards
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={5} md={6}>
                  3,543%
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'left'}} item xs={7} md={6}>
                  ROI
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={5} md={6}>
                  3,543%
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RebaseTab;