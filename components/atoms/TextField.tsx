import { TextField, styled } from "@mui/material";

export const BasicTextField = styled(TextField)((props) => ({
  [`& .MuiOutlinedInput-root`]: {
    "& fieldset": {
      // borderColor: props.theme.palette.com.gray500,
      // borderStyle: "solid",
      // borderWidth: 2,
      // borderRadius: 8,
    },
  },
}));
