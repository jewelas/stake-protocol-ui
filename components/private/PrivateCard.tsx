//MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//Utils
import BigNumber from "bignumber.js";
import Countdown from "react-countdown";
import Image from "next/image";
import { toWei } from "web3-utils";
// hooks
import { getContracts } from "data/contracts";
import { useAuth, useContract } from "hooks/useAuth";
import { useState, useCallback, useEffect, KeyboardEvent } from "react";

const PrivateCard = () =>
{
  // blockchain
  const { account, chainId, login } = useAuth();
  const presaleContract = getContracts("TokenPresale", chainId);
  const { methods: presaleMethods } = useContract(
    presaleContract.abi,
    presaleContract.address
  );

  const [ BNBAmount, setBNBAmount ] = useState<number>(0);
  const [ fillPercent, setFillPercent ] = useState<number>(0);
  const [ presaleState, setPresaleState ] = useState<{
    hardcap: BigNumber;
    raised: BigNumber;
  }>({ hardcap: new BigNumber(0), raised: new BigNumber(0) });
  const [ userInfo, setUserInfo ] = useState<{
    bought: BigNumber;
    claimed: boolean;
  }>({ bought: new BigNumber(0), claimed: false });

  const totalToBuy = BNBAmount * 525;
  const presaleStarted = true;
  const presaleActive = false;
  // Presale state
  const getPresaleState = useCallback(async () =>
  {
    if (!presaleMethods || !account) return;
    const userInfoFromMap = await presaleMethods.userInfo(account).call();
    const totalRaised = new BigNumber(
      await presaleMethods.totalRaise().call()
    ).div(10 ** 18);
    const hardcap = new BigNumber(await presaleMethods.HARD_CAP().call()).div(
      10 ** 18
    );
    setUserInfo({
      bought: new BigNumber(userInfoFromMap.bought),
      claimed: userInfoFromMap.claimed,
    });
    setFillPercent(
      parseFloat(totalRaised.div(hardcap).times(100).toFixed(2, 1))
    );
    setPresaleState({ hardcap: hardcap, raised: totalRaised });
  }, [ account, presaleMethods, setFillPercent ]);

  useEffect(() =>
  {
    if (!account || !chainId || !presaleMethods) return;
    getPresaleState();
  }, [ account, chainId, getPresaleState, presaleMethods ]);

  useEffect(() =>
  {
    if (!account || !chainId) return;
    const interval = setInterval(getPresaleState, 10000);
    return () =>
    {
      clearInterval(interval);
    };
  }, [ account, chainId, getPresaleState ]);

  const buyNow = useCallback(async () =>
  {
    if (!BNBAmount || !account || !presaleMethods) return;
    await presaleMethods
      .buyToken()
      .send({ from: account, value: toWei(BNBAmount.toString()) });
  }, [ account, presaleMethods, BNBAmount ]);

  const claimNow = useCallback(async () =>
  {
    if (
      userInfo.claimed == true ||
      userInfo.bought.isEqualTo(0) ||
      !account ||
      !presaleMethods
    )
      return;
    presaleMethods.claimToken().send({ from: account });
  }, [ account, presaleMethods, userInfo ]);

  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        width: 500,
        p: 8,
        my: 4,
        border: 2,
        borderColor: theme.palette.primary.main,
        borderRadius: 4,
      })}
    >
      <Stack direction="column" alignItems="center" textAlign="center">
        <Box sx={{ width: "100%", mb: 2 }}>
          <Typography
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              fontFamily: "Abadi",
              mb: 2,
            })}
          >
            TOTAL RAISED - CAP REACHED
          </Typography>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={100}
            sx={{ height: 12, borderRadius: 4 }}
          />
          {/* {presaleState.raised.toFixed(2, 1).toString()} /{" "}
          {presaleState.hardcap.toFixed(2, 1).toString()} BNB */}
          75 / 75 BNB
        </Box>
        <Typography
          component="div"
          style={{ fontFamily: "Century-Gothic" }}
          align="justify"
        >
          Stake Protocol seeks to have the best of some of the successful
          protocols in Defi. $STAKE is the official currency of Stake Protocol.
          <Typography
            align="center"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              fontFamily: "Abadi",
              my: 2,
            })}
          >
            TERMS AND CONDITIONS
          </Typography>
          <ul>
            <li>
              The hard cap is of {presaleState.hardcap.toFixed(2, 1).toString()}{" "}
              BNB
            </li>
            <li>You can only buy up to 2 BNB of $STAKE per wallet</li>
            <li>The presale will only last for 24 hours.</li>
            <li>Tokens will be claimable when the Pinksale ends.</li>
          </ul>
        </Typography>

        {/* USER BOUGHT BNB */}
        {/* CLAIM NOW BUTTON - ONLY SHOWS WHEN SALE IS OVER AND TOKEN ADDRESS IS NOT 0 */}
        {/* THE COUNTER BEFORE PRESALE ENDS WHEN PRESALE BEGINS, AT 1651489200000, MONDAY 5/3/2022 AT 5AM */}
        {/* SALE ENDS IN 24 HOURS 1651575600000 TIMESTAMP IN MILISECONDS FOR TUESDAY 5/3/2022 AT 5AM */}
        <Countdown
          date={1651489200000}
          renderer={({ days, hours, minutes, seconds, completed }) =>
          {
            return completed ? (
              <Stack direction="column" alignItems="center">
                {account && (
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.primary.main,
                      fontFamily: "Century-Gothic",
                      mb: 2,
                      whiteSpace: "pre-line",
                    })}
                  >
                    {userInfo.claimed === false ? "BOUGHT:" : "CLAIMED:"}
                    {"\n"}{" "}
                    {userInfo.bought
                      .div(10 ** 18)
                      .times(525)
                      .toFixed(2, 1)
                      .toString()}{" "}
                    $STAKE FOR{" "}
                    {userInfo.bought
                      .div(10 ** 18)
                      .toFixed(2, 1)
                      .toString()}{" "}
                    BNB
                  </Typography>
                )}
                {/* BUY:
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ mb: 1, mt: 2 }}
                >
                  <TextField
                    error={!BNBAmount}
                    disabled={true}
                    color="primary" focused
                    value={BNBAmount}
                    type="number"
                    id="filled-error-helper-text"
                    label="Amount"
                    inputProps={{ step: "0.01", min: "0.00", max: "2.00" }}
                    variant="outlined"
                    sx={{ mr: 2 }}
                    onChange={(e) =>
                    {
                      const newVal = parseFloat(e.target.value);
                      if (newVal < 0 || isNaN(newVal)) return setBNBAmount(0);

                      if (newVal > 2) return setBNBAmount(2);
                      setBNBAmount(Math.floor(newVal * 100) / 100);
                    }}
                    onFocus={(e) => e.target.select()}
                    onKeyUp={(e) =>
                    {
                      if (e.key == "Enter") {
                        e.preventDefault();
                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                  />
                  BNB
                </Stack>
                FOR {totalToBuy.toFixed(2)} $STAKE */}
                <Typography
                  variant="h6"
                  fontFamily="Suissnord"
                  color="textSecondary"
                >
                  CAP REACHED
                </Typography>
                <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
                  <Image
                    src="/logos/Logo_4.png"
                    height={5877 / 50}
                    width={2156 / 50}
                    alt="Stake Protocol Logo 4"
                  />
                  <Stack direction="column" gap={2}>
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mx: 1.5 }}
                      onClick={buyNow}
                      disabled
                    >
                      BUY NOW
                    </Button> */}
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={
                        !(
                          userInfo.bought.isGreaterThan(0) &&
                          presaleMethods &&
                          !userInfo.claimed
                        )
                          ? true
                          : false
                      }
                      sx={{ mx: 1.5 }}
                      onClick={claimNow}
                    >
                      CLAIM
                    </Button>
                  </Stack>
                  <Image
                    src="/logos/Logo_4.png"
                    height={5877 / 50}
                    width={2156 / 50}
                    alt="Stake Protocol Logo 4"
                  />
                </Stack>
              </Stack>
            ) : (
              <Stack direction="column" alignItems="center">
                <Typography color="primary">PRESALE STARTS IN</Typography>
                <Typography variant="h5" sx={{ pl: 1 }}>
                  <>
                    {days > 0 ? (
                      <strong suppressHydrationWarning={true}>
                        {days}{" "}
                        <Typography color="secondary" display="inline">
                          D
                        </Typography>{" "}
                      </strong>
                    ) : (
                      ""
                    )}
                    &nbsp;
                    {hours > 0 ? (
                      <strong suppressHydrationWarning={true}>
                        {hours}{" "}
                        <Typography color="secondary" display="inline">
                          H
                        </Typography>{" "}
                      </strong>
                    ) : (
                      ""
                    )}
                    &nbsp;
                    {minutes > 0 ? (
                      <strong suppressHydrationWarning={true}>
                        {minutes}{" "}
                        <Typography color="secondary" display="inline">
                          M
                        </Typography>{" "}
                      </strong>
                    ) : (
                      ""
                    )}
                    &nbsp;
                    {seconds > 0 ? (
                      <strong suppressHydrationWarning={true}>
                        {seconds}{" "}
                        <Typography color="secondary" display="inline">
                          S
                        </Typography>{" "}
                      </strong>
                    ) : (
                      ""
                    )}
                    &nbsp;
                  </>
                </Typography>
              </Stack>
            );
          }}
        />
      </Stack>
    </Card>
  );
};
export default PrivateCard;
