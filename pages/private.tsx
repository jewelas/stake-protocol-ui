//MUI
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
//Components
import PageContainer from "components/PageContainer";
import PrivateCard from "components/private/PrivateCard";
//Utils
import Head from "next/head";
import Image from "next/image";
import { useEagerConnect } from "hooks/useAuth";

const PrivateSale = () => {
  useEagerConnect();
  return (
    <>
      <Head>
        <title>Private Sale</title>
        <meta
          name="description"
          content="Sale for $STAKE, the currency of Stake Protocol."
        />
        <meta name="author" content="Private Sale" />
      </Head>
      <PageContainer>
        <Stack direction="column" alignItems="center">
          <div style={{ position: "absolute", top: -60 }}>
            <Image
              src="/logos/Logo_3.png"
              height={1080 / 3}
              width={1080 / 3}
              alt="Stake Protocol Logo 3"
            />
          </div>
          <Typography
            sx={(theme) => ({
              fontFamily: "Suissnord",
              fontSize: "40px",
              letterSpacing: 6,
              mt: 10,
            })}
          >
            Private Sale
          </Typography>
          <PrivateCard />
        </Stack>
      </PageContainer>
    </>
  );
};
export default PrivateSale;
