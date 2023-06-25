/** @jsxImportSource @emotion/react */
"use client";

import { BasicButton } from "@/components/atoms/BasicButton";
import { BasicTextField } from "@/components/atoms/TextField";
import { Header } from "@/components/organisms/Header";
import { Layout } from "@/components/organisms/Layout";
import { auth } from "@/lib/firebase/firebase";
import { fontTypes } from "@/styles/font";
import { lightTheme } from "@/styles/themes/lightTheme";
import { useAuthContext } from "@/utils/contexts/AuthContext";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { redirect, useParams } from "next/navigation";
import { NonPrivateRoute } from "@/components/atoms/NonPrivateRoute";

const Signup = () => {
  const { user } = useAuthContext();
  const { service_id } = useParams();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const theme = lightTheme;

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      await createUserWithEmailAndPassword(
        auth,
        data.get("email")!.toString(),
        data.get("password")!.toString()
      );
      redirect(`/${service_id}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error);
        setError(error.message);
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("Email already in use");
            break;
          case "auth/invalid-email":
            setError("Invalid email");
            break;
          case "auth/weak-password":
            setError("Weak password");
            break;
          default:
            setError("Error");
            break;
        }
      }
    }
  };

  return (
    <NonPrivateRoute>
      <Container maxWidth="xs" sx={{ py: 4, pt: 12 }}>
        <Stack gap={4} alignItems="center">
          <Typography css={fontTypes(theme).title}>
            Sign up to Pinyin-OCR
          </Typography>
          {error ? (
            <Typography
              css={[fontTypes(theme).disc, { color: theme.palette.error.main }]}
            >
              {error}
            </Typography>
          ) : undefined}
          <BasicButton
            type="contained"
            img="/image/logo/google.svg"
            href="nekodigi.com"
            color={theme.palette.com.green500}
            label="Continue with Google"
            style={{ width: "100%" }}
          />
          <Divider flexItem>
            <Typography
              css={[
                fontTypes(theme).title,
                { color: theme.palette.com.gray500 },
              ]}
            >
              OR
            </Typography>
          </Divider>
          <Stack gap={4} width="100%" component="form" onSubmit={handleSignup}>
            <Stack gap={2} width="100%">
              <BasicTextField
                ref={emailRef}
                required
                type="email"
                label="Email"
                id="email"
                name="email"
                autoComplete="email"
                fullWidth
              />
              <BasicTextField
                ref={passwordRef}
                required
                type="password"
                label="Password"
                id="password"
                name="password"
                autoComplete="current-password"
                fullWidth
              />
            </Stack>
            <BasicButton
              buttonType="submit"
              type="fill"
              color={theme.palette.com.green500}
              label="Continue"
              style={{ width: "100%" }}
            />
          </Stack>
        </Stack>
      </Container>
    </NonPrivateRoute>
  );
};

export default Signup;
