import { lightTheme } from "@/styles/themes/lightTheme";
import { ThemeProvider } from "@mui/material";
import { Header } from "./Header";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import { AuthProvider } from "@/utils/contexts/AuthContext";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
