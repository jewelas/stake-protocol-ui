import * as React from 'react';
import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// components
import SwapTab from '../components/swap/SwapTab';
// import Link from '@mui/material/Link';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Swap: NextPage = () => {
  const [tabValue, setTabValue] = React.useState("0");
  const tabHandler = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  return (
    <PageContainer>
      <div style={{ width: '100%',padding:isResp520?'24px':'0px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ButtonGroup color="secondary" variant="contained">
            <Link href="/swap">
              <Button >swap</Button>
            </Link>
            <Link href="/foundation">
              <Button>Liquidity</Button>
            </Link>
          </ButtonGroup>
        </Box>
        <SwapTab />
      </div>
    </PageContainer>
  );
};

export default Swap;