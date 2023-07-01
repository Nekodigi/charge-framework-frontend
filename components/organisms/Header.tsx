/** @jsxImportSource @emotion/react */

import { fontTypes } from "@/styles/font";
import { stringAvatar } from "@/utils/funcs/avater";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { BasicButton } from "../atoms/BasicButton";
import { useAuthContext } from "@/utils/contexts/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { auth } from "@/lib/firebase/firebase";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { UserAvatarMenu } from "./UserAvatarMenu";
import axios from "axios";

export const Header = () => {
  const { user } = useAuthContext();
  const theme = useTheme();
  const router = useRouter();
  const { service_id } = useParams();
  const searchParams = useSearchParams();
  const [serviceName, setServiceName] = useState("");

  useEffect(() => {
    const update = async () => {
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/${service_id}`,
        method: "get",
        data: {},
      });
      setServiceName(res.data.name);
    };
    update();
  }, [service_id]);

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        borderBottom: 1,
        borderColor: theme.palette.com.gray500Op50,
      }}
      elevation={0}
    >
      <Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography css={fontTypes(theme).title}>
              {serviceName ? serviceName : service_id}
            </Typography>
            {user ? (
              <UserAvatarMenu user={user} />
            ) : (
              <BasicButton
                type="contained"
                href={`/${service_id}/login${
                  searchParams.get("link_target")
                    ? `?link_target=${searchParams.get("link_target")}`
                    : ""
                }`}
                label="Login"
                style={{
                  padding: 12,
                  paddingTop: 4,
                  paddingBottom: 4,
                  height: 27,
                }}
                labelStyle={fontTypes(theme).body}
              />
            )}

            {/* <Avatar {...stringAvatar("Kent Dodds")} /> */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
