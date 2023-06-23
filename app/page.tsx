/** @jsxImportSource @emotion/react */

"use client";

import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import { Header } from "@/components/organisms/Header";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { fontTypes } from "@/styles/font";
import { ProgressWithLabel } from "@/components/molecules/ProgressWithLabel";
import { lightTheme } from "@/styles/theme/lightTheme";
import { PlanCard } from "@/components/organisms/PlanCard";

export default function Home() {
  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Header serviceName="Pinyin-OCR" />
      <Button variant="contained">AAA</Button>
      <Container maxWidth="md" sx={{ p: 4 }}>
        <Stack gap={4}>
          <Stack gap={1.5}>
            <Typography css={fontTypes(theme).title}>Your Token</Typography>
            <ProgressWithLabel current={50} maximum={400} />
          </Stack>
          <Stack gap={2}>
            <PlanCard
              title="Starter"
              price="Free"
              color={theme.palette.com.gray500}
            />
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
