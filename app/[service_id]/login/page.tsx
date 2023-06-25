/** @jsxImportSource @emotion/react */
"use client";

import { BasicButton } from "@/components/atoms/BasicButton";
import { NonPrivateRoute } from "@/components/atoms/NonPrivateRoute";
import { BasicTextField } from "@/components/atoms/TextField";
import { Header } from "@/components/organisms/Header";
import { Layout } from "@/components/organisms/Layout";
import { auth, provider } from "@/lib/firebase/firebase";
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Signup = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const { service_id } = useParams();
  const searchParams = useSearchParams();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const theme = lightTheme;

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      await signInWithEmailAndPassword(
        auth,
        data.get("email")!.toString(),
        data.get("password")!.toString()
      );
    } catch (error) {
      if (error instanceof FirebaseError) {
        //console.log(error);
        setError(error.message);
        //error code for firebase auth login
        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid email");
            break;
          case "auth/user-disabled":
            setError("User disabled");
            break;
          case "auth/user-not-found":
            setError("User not found");
            break;
          case "auth/wrong-password":
            setError("Wrong password");
            break;
          case "auth/too-many-requests":
            setError("Too many requests");
            break;
          default:
            setError("Error");
        }
      }
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
      //setError(error.message);
    }
  };

  const action = searchParams.get("action");
  const plan = searchParams.get("plan");

  return (
    <NonPrivateRoute
      action={action ? action : undefined}
      plan={plan ? plan : undefined}
    >
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
            color={theme.palette.com.green500}
            label="Continue with Google"
            style={{ width: "100%" }}
            onClick={handleGoogleAuth}
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
          <Stack gap={4} width="100%" component="form" onSubmit={handleLogin}>
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
