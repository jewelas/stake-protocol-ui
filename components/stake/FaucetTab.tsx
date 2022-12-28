import { Box, Button, Grid } from '@mui/material';
import { fontWeight } from '@mui/system';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import * as React from 'react';
import CustomInput from './CustomInput';
import { useMediaQuery } from 'react-responsive';

const FaucetTab = () => {
  const [sellAmount, setSellAmount] = React.useState('0');
  const [buyAmount, setBuyAmount] = React.useState('0');

  const handleSellAmount = (e: any) => {
    e.target.value = e.target.value.toString().replace(",", ".").replace(" ", "");
    if (isNaN(e.target.value)) {
      return;
    }
    setSellAmount(e.target.value);
  }

  const handleBuyAmount = (e: any) => {
    e.target.value = e.target.value.toString().replace(",", ".").replace(" ", "");
    if (isNaN(e.target.value)) {
      return;
    }
    setBuyAmount(e.target.value);
  }
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  const isResp750 = useMediaQuery({
    query: '(max-width: 750px)'
  });
  return (
    <Grid container spacing={2}
      sx={{
        display: isResp520 ? 'block' : 'flex'
      }}
    >
      {/* net faucet value */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: isResp520 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '30px'
            }}
          >
            Net Faucet Value (NFV)
          </Box>
          <Grid container spacing={3}>
            {/* nfv available */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={6} lg={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  NFV Available
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* deposits */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={6} lg={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Deposits
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* Gross Claimed */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={6} lg={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Gross Claimed
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* max payout */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={6} lg={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Max Payout
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* buttons */}
            {isResp750 ? (
              <>
                <Grid item xs={6}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Claim
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Deposit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Compound
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={4}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Claim
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Compound
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color="secondary" fullWidth variant="contained"
                    sx={{ fontSize: isResp520 ? '0.68rem' : '0.875rem' }}>
                    Deposit
                  </Button>
                </Grid>
              </>
            )}

          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            background: isResp520 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          {/* sell */}
          <Box
            sx={{
              display: 'block',
              justifyContent: 'center',
            }}
          >
            <Box>
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
              <CustomInput value={sellAmount} setValue={e => handleSellAmount(e)} width="100%" icon={<SellIcon />} />
              <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                <Button color="secondary" variant="contained">Sell</Button>
              </Box>
            </Box>
          </Box>
          {/* buy */}
          <Box
            sx={{
              display: 'block',
              justifyContent: 'center',
            }}
          >
            <Box>
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
              <CustomInput value={buyAmount} setValue={e => handleBuyAmount(e)} width="100%" icon={<ShoppingBagIcon />} />
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
            background: isResp520 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          some description
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            background: isResp520 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            NERD
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            (Net Elastic Rebase Depletion)
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={7} md={6}>
                  Net Deposits
                </Grid>
                <Grid item xs={5} md={6}>
                  -123.3211
                </Grid>
                <Grid item xs={7} md={6}>
                  <Box>
                    Current Rebase Rate
                  </Box>
                  <Box
                    sx={{ paddingLeft: '50px' }}
                  >
                    (daily)
                  </Box>
                </Grid>
                <Grid item xs={5} md={6}>
                  0.2%
                </Grid>
                <Grid item xs={7} md={6}>
                  GFV Depletion
                </Grid>
                <Grid item xs={5} md={6}>
                  no
                </Grid>
                <Grid item xs={7} md={6}>
                  Depletion Amount
                </Grid>
                <Grid item xs={5} md={6}>
                  0 Stake
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FaucetTab;