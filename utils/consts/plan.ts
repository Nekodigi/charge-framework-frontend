import { Theme } from "@mui/material";

export const planName = {
  free: "Starter",
  basic: "Professional",
  "pay-as-you-go": "Pay as you go",
};

export const planColor = (theme: Theme) => {
  return {
    free: theme.palette.com.gray500,
    basic: theme.palette.com.green500,
    "pay-as-you-go": theme.palette.com.blue500,
  };
};
export type planKeyType = keyof typeof planName;
