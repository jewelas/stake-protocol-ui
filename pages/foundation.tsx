import * as React from 'react';
import type { NextPage } from 'next';
import PageContainer from 'components/PageContainer';
import { Box, Grid, Button } from '@mui/material';
import CustomInput from 'components/stake/CustomInput';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useMediaQuery } from 'react-responsive';

const Foundation: NextPage = () => {
  const [buyAmount, setBuyAmount] = React.useState('0');
  const [sellAmount, setSellAmount] = React.useState('0');
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

  const isResp1300 = useMediaQuery({
    query: '(max-width: 1300px)'
  });
  return (
    <PageContainer>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '36px',
            color: 'secondary.main'
          }}
        >
          Foundation
        </Box>
        <Box
          sx={{
            background: '#212121',
            padding: '10px',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderRadius: '16px'
          }}
        >
          <Grid container spacing={2}>
            {/* nfv available */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={6} md={2}>
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
                  POL Locked
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
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={6} md={2}>
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
                  Users Staked
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
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={6} md={3}>
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
                  Dividend Pool
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
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={6} md={3}>
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
                  Total Stoke
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={2}>
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
                  Rewards Paid
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: '#212121',
            marginTop: '40px',
            padding: '10px',
            borderRadius: '16px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
              >
                Buy and Deposit Stoke
              </Box>
              {/* buy */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Box>
                      Stoke Price: 0.03352
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box>BNB Balance: 1.452</Box>
                  </Box>
                  <CustomInput 
                  value={buyAmount} 
                  setValue={e => handleBuyAmount(e)} 
                  width={isResp1300?'100%':"500px"} 
                  icon={<ShoppingBagIcon />} />
                  <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                    <Button color="secondary" variant="contained">Buy</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
              >
                Withdraw Stoke to BNB
              </Box>
              {/* sell */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box>Stake Balance: 65,707</Box>
                  </Box>
                  <CustomInput 
                  value={sellAmount} 
                  setValue={e => handleSellAmount(e)} 
                  width={isResp1300?'100%':"500px"}
                  icon={<SellIcon />} />
                  <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                    <Button color="secondary" variant="contained">Sell</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Rewards (BNB)
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '26px',
                  fontWeight: 'bold'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                $999,999,999
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Total Stoke
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '26px',
                  fontWeight: 'bold'
                }}
              >
                4.324
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                $999,999,999
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Stake %
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '26px',
                  fontWeight: 'bold'
                }}
              >
                0.53%
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: '#212121',
            padding: '10px',
            borderRadius: '16px',
            height: '100px',
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Rebase Description
        </Box>
      </Box>
    </PageContainer>
  )
}

export default Foundation;
