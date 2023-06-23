/** @jsxImportSource @emotion/react */

import { Stack, Typography, useTheme } from "@mui/material";
import { CheckRounded, CloseRounded } from "@mui/icons-material";
import { fontTypes } from "@/styles/font";

type BenefitProps = {
  checked: boolean;
  text: string;
};

export const Benefit = ({ checked, text }: BenefitProps) => {
  const theme = useTheme();

  return (
    <Stack direction="row" gap={1.5}>
      {checked ? <CheckRounded /> : <CloseRounded />}
      <Typography css={fontTypes(theme).item}>{text}</Typography>
    </Stack>
  );
};
