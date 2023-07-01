/** @jsxImportSource @emotion/react */

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useTheme,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import { Nekodigi } from "../molecules/Nekodigi";
import { useContext, useEffect } from "react";
import { FaGithub, FaYoutube, FaGooglePlay } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { UseTranslation } from "next-i18next";

export const Footer = () => {
  const theme = useTheme();
  //const { t } = useTranslation();

  type CategoryProps = {
    name: string;
    items: UrlProps[];
  };
  const grayLink = [
    fontFamilies.Jp,
    fontSizes.px14,
    {
      color: theme.palette.local.gray,
      fontWeight: 500,
    },
  ];
  const grayLinkNorm = (href: string, text: string) => {
    return (
      <Link href={href} underline="none">
        <Typography css={grayLink}>{text}</Typography>
      </Link>
    );
  };

  // const footerLanguages: LangProps[] = [
  //   { abbr: "en", name: "English" },
  //   { abbr: "ja", name: "日本語" },
  // ];

  const footerCategories: CategoryProps[] = [
    {
      name: "Services",
      items: [
        {
          alt: "Creative Magic",
          url: "https://play.google.com/store/apps/details?id=com.Nekodigi.CreativeMagic",
        },
        { alt: "Web Answer Sheet", url: "https://webans.nekodigi.com/" },
        { alt: "Artifact Sim", url: "https://artifact.nekodigi.com/" },
      ],
    },
    {
      name: "Legal",
      items: [
        {
          alt: "Privacy Policy",
          url: "https://nekodigi.com/terms/privacy",
        },
        {
          alt: "Act on Specified Commercial Transactions",
          url: "https://nekodigi.com/terms/commercial-law",
        },
      ],
    },
  ];

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <AppBar
        position="relative"
        sx={{
          bgcolor: theme.palette.local.white,
        }}
        elevation={0}
      >
        <Container>
          <Toolbar
            sx={{
              py: 2,

              px: 2,
              color: theme.palette.local.black,

              borderTop: `1px solid`,
              borderColor: theme.palette.local.whiteDark,
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItem: "flex-start",
              },
            }}
          >
            <Stack
              direction="row"
              gap={16}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                  width: "100%",
                },
                pb: 8,
              }}
            >
              <Stack gap={2}>
                <Nekodigi useLogo={true} />
              </Stack>
              <Stack
                direction="row"
                gap={8}
                sx={{
                  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
                }}
              >
                {footerCategories.map((category) => (
                  <Stack
                    key={category.name}
                    gap={2}
                    sx={{ width: { xs: "100%", sm: 128 } }}
                  >
                    <Typography
                      css={[
                        fontFamilies.Jp,
                        fontSizes.px14,
                        { fontWeight: 700 },
                      ]}
                    >
                      {category.name}
                    </Typography>
                    {category.items.map((item) =>
                      grayLinkNorm(item.url, item.alt)
                    )}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Box flexGrow={1}></Box>

            <Box sx={{ display: { sm: "flex" }, pb: 8 }} gap={2}>
              <IconButton href="https://github.com/Nekodigi">
                <FaGithub color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://www.youtube.com/c/Nekodigi">
                <FaYoutube color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://nekodigi.hatenablog.com/archive">
                <MdArticle color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://play.google.com/store/apps/dev?id=8989861170574890555">
                <FaGooglePlay color={theme.palette.local.black} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

import { Button } from "@mui/material";
import { css, jsx } from "@emotion/react";

import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useTranslation } from "react-i18next";
import { makeStaticProps, getStaticPaths } from "../../utils/i18n/getStatic";
import { fontFamilies, fontSizes } from "@/styles/font";
import LanguageSwitchLink from "../atoms/LanguageSwitchLink";

type TextButtonProps = {
  label: string;
};

export const TextButton = (props: TextButtonProps) => {
  const theme = useTheme();
  const { label } = props;

  return (
    <Button
      css={[fontFamilies.Jp, fontSizes.px16]} //, fontFamily: "Noto Sans JP"
      sx={{
        color: theme.palette.com.white,
        textTransform: "none",
        fontWeight: 400,
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  );
};
