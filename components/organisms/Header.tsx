/** @jsxImportSource @emotion/react */

import { fontTypes } from "@/styles/font";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

type HeaderProps = {
  serviceName: string;
};

export const Header = ({ serviceName }: HeaderProps) => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>
        <Container maxWidth="md">
          <Typography css={fontTypes(theme).title}>{serviceName}</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
