import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import CustomInput from './CustomInput';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SimpleAreaChart from '../common/SimpleAreaChart';
import { useMediaQuery } from 'react-responsive';


const OverviewTab = () => {
  const [sellAmount, setSellAmount] = React.useState('0');
  const [buyAmount, setBuyAmount] = React.useState('0');

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
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: isResp520?'20px':'26px',
          fontWeight: 'bold',
          color: 'lightblue'
        }}
      >
        Earn up to 3% daily with Stake Protocol's Net Elastic Rebase Depletion
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          padding: '30px',
          display:isResp520?'initial':'flex'
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
          <Box
            sx={{
              background: isResp520?'#69696969':'#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            <Box
              sx={{
                fontSize: isResp520?'20px':'28px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              Total Stake Available
            </Box>
            <Box
              sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center'
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
              $3,532.23432
            </Box>
            {/* buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                paddingTop: '20px'
              }}
            >
              <Box
                sx={{
                  width: '50%'
                }}
              >
                <Button size="large" color="secondary" 
                  fullWidth variant="contained"
                  sx={{
                    fontSize:isResp520?'0.68rem':'0.9375rem',
                    padding:isResp520?'8px 5px':'8px 22px'
                  }}>
                  Claim all
                </Button>
              </Box>
              <Box
                sx={{
                  width: '50%'
                }}
              >
                <Button size="large" color="secondary" 
                fullWidth variant="contained"
                sx={{
                  fontSize:isResp520?'0.68rem':'0.9375rem',
                  padding:isResp520?'8px 5px':'8px 22px'
                }}>
                  Compound all
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              <Button size="large" color="secondary" fullWidth variant="contained">Deposit</Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
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
                <CustomInput 
                  value={sellAmount} 
                  setValue={e => handleSellAmount(e)} 
                  width='100%'
                  icon={<SellIcon />} 
                />
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
                <CustomInput 
                  value={buyAmount} 
                  setValue={e => handleBuyAmount(e)} 
                  width='100%'  
                  icon={<ShoppingBagIcon />} 
                />
                <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                  <Button color="secondary" variant="contained">Buy</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
          <Box
            sx={{
              background: isResp520?'#69696969':'#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  NFV
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px'
                  }}
                >
                  (Net Faucet Value)
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  GFV
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px'
                  }}
                >
                  (Gross Faucet Value)
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: isResp520?'16px':'18px'
                  }}
                >
                  Referral Rewards
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: isResp520?'16px':'18px'
                  }}
                >
                  FLAME in Wallet
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $5,707
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
          <Box
            sx={{
              background: isResp520?'#69696969':'#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            {/* NERD */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '20px'
              }}
            >
              NERD
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              (Net Elastic Rebase Depletion)
            </Box>
            <Box>

            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
          <Box
            sx={{
              background: isResp520?'#69696969':'#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            {/* market cap */}
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Market Cap
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* Total players */}
              <Grid item xs={12} md={2} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Total Players
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  99,999
                </Box>
              </Grid>
              {/* faucet returns */}
              <Grid item xs={12} md={2} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Faucet Returns
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                  }}
                >
                  1% Daily
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                  }}
                >
                  (on locked value)
                </Box>
              </Grid>
              {/* Treasury Value */}
              <Grid item xs={12} md={3} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Treasury Value
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* Total POL */}
              <Grid item xs={12} md={3} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Total POL
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* total supply */}
              <Grid item xs={12} md={2} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Total Supply
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  1,865,707
                </Box>
              </Grid>
              {/* Locked in Vault */}
              <Grid item xs={12} md={2} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Locked in Vault
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  65,707
                </Box>
              </Grid>
              {/* rebase returns */}
              <Grid item xs={12} md={2} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Rebase Returns
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                  }}
                >
                  2% Daily
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                  }}
                >
                  (on locked value)
                </Box>
              </Grid>
              {/* floor price */}
              <Grid item xs={12} md={3} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Floor Price
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  65,707
                </Box>
              </Grid>
              {/* time until next rebase */}
              <Grid item xs={12} md={3} sx={{ display: isResp520?'flex':'block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    fontWeight: 'bold',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  Time until next rebase
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'flex-start':'center',
                    flex: isResp520?'0 0 50%':'auto',
                    maxWidth: isResp520?'50%':'initial'
                  }}
                >
                  23 min
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            paddingLeft:isResp520?'0px !important':'auto'
          }}
        >
          <Box
            sx={{
              background: isResp520?'#69696969':'#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            {/* <SimpleAreaChart /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverviewTab;