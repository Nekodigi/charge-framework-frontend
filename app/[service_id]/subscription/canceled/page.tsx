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
import { status } from "@/utils/consts/status";
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
import axios from "axios";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SubscriptionCanceled = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const { service_id } = useParams();

  const [error, setError] = useState("");

  const theme = lightTheme;

  return (
    <Container maxWidth="xs" sx={{ py: 4, pt: 12 }}>
      <Stack gap={4} alignItems="center">
        <Typography css={fontTypes(theme).title}>
          Subscription has been canceled
        </Typography>
        {error ? (
          <Typography
            css={[fontTypes(theme).disc, { color: theme.palette.error.main }]}
          >
            {error}
          </Typography>
        ) : undefined}
        <Typography css={fontTypes(theme).disc}>
          Your subscription has been successfully canceled. Please remember that
          you can resume your subscription at any time.
        </Typography>
        <BasicButton
          type="fill"
          color={theme.palette.com.green500}
          label="Back to home"
          href={`/${service_id}`}
          style={{ width: "100%" }}
        />
      </Stack>
    </Container>
  );
};

export default SubscriptionCanceled;
