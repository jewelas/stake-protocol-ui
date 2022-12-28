import type { NextPage } from "next";
import Image from 'next/image'
// StakeProtocolUI
import PageContainer from "components/PageContainer";
// Images
import Logo from '../public/logos/Logo_1.png'
import Logo4 from '../public/logos/Logo_4.png'
// Material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: NextPage = () =>
{
  return (
    <PageContainer>
      <Stack alignItems="center">
        <div style={{ minHeight: '180px', minWidth: '20%', width: '100%', maxWidth: '300px' }}>
          <Image src={Logo} layout="responsive" alt="Main Logo" />
        </div>
      </Stack>
      <Typography align="center" variant="h2" component="div" fontFamily="Abadi" fontWeight="normal" fontStyle="normal" sx={{ mt: 3 }}>
        Welcome to Stake Protocol
      </Typography>
      <Typography align="center" variant="h5" fontFamily="Suissnord" component="div" sx={{ mb: 4 }} letterSpacing={2}>
        A new evolution in DeFi
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <Box minHeight='100px' minWidth='80px' sx={{ display: { xs: 'none', md: 'block' } }} component="div">
          <Image src={Logo4} layout="responsive" alt="Knight" />
        </Box>
        <Typography paragraph maxWidth={400} align="justify" whiteSpace="pre-line">
          Stake Protocol introduces high frequency positive rebase system every 30 minutes for up to 137,640.83% APY (2% Daily), on top of the core faucet return daily of 1% Daily for 365 days, for a total of up to 3% daily!
          {'\n'}However, we manage this is a way that is more sustainable that existing protocols.
        </Typography>
        <Box minHeight='100px' minWidth='80px' sx={{ display: { xs: 'none', md: 'block' } }} component="div">
          <Image src={Logo4} layout="responsive" alt="Knight" />
        </Box>
      </Stack>
      <Stack alignItems="center">
        <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold' }} href="https://stake-protocol.gitbook.io/docs/" target="_blank" rel="noopenner noreferrer">
          Read the Docs
        </Button>
      </Stack>
    </PageContainer >
  );
};

export default Home;
