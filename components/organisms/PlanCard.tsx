/** @jsxImportSource @emotion/react */

import { fontTypes } from "@/styles/font";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Benefit } from "../molecules/Benefit";

type PlanCardProps = {
  color: string;
  title: string;
  price: string;
};
export const PlanCard = ({ color, title, price }: PlanCardProps) => {
  const theme = useTheme();

  return (
    <Stack
      maxWidth={320}
      borderRadius={2}
      overflow={"hidden"}
      sx={{ border: 1, borderColor: theme.palette.com.gray500 }}
    >
      <Box sx={{ backgroundColor: color, height: 8 }}></Box>
      <Stack sx={{ p: 2 }} gap={1.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <Typography css={fontTypes(theme).title}>{title}</Typography>
          <Typography css={fontTypes(theme).subtitle}>{price}</Typography>
        </Stack>
        <Stack gap={1}>
          <Benefit checked={true} text="NONE" />
        </Stack>
        <Button variant="contained">Your Current Plan</Button>
        <Button>AAAA</Button>
      </Stack>
    </Stack>
  );
};
