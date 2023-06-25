/** @jsxImportSource @emotion/react */

"use client";

import { Header } from "@/components/organisms/Header";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { fontTypes } from "@/styles/font";
import { ProgressWithLabel } from "@/components/molecules/ProgressWithLabel";
import { lightTheme } from "@/styles/themes/lightTheme";
import { PlanCard } from "@/components/organisms/PlanCard";
import { Layout } from "@/components/organisms/Layout";
import { useParams, useSearchParams } from "next/navigation";
import { useAuthContext } from "@/utils/contexts/AuthContext";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Plan } from "@/utils/types/plan";
import { planColor, planKeyType, planName } from "@/utils/consts/plan";

export default function Home() {
  const theme = lightTheme;
  const { service_id } = useParams();
  const { user } = useAuthContext();
  const [cancelAtPeriodEnd, setCancelAtPeriodEnd] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("");
  const [plans, setPlans] = useState<{ [key: string]: Plan }>({});
  const [allocQuota, setAllocQuota] = useState(0);
  const [remainQuota, setRemainQuota] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${service_id}/${user?.uid}`,
        method: "get",
        data: {},
      });
      let data = res.data;
      setCancelAtPeriodEnd(data.cancel_at_period_end);
      setCurrentPlan(data.plan);
      console.log(data);
      res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/plan/${service_id}`,
        method: "get",
        data: {},
      });
      data = res.data;
      console.log(data);
      setPlans(data.plan);
      res = await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/quota/${service_id}/${user?.uid}`,
        method: "get",
        data: {},
      });
      data = res.data;
      console.log(data);
      setAllocQuota(data.allocQuota);
      setRemainQuota(data.remainQuota);
    };
    fetch();
  }, [user, service_id]);

  useEffect(() => {
    if (
      Object.keys(plans).length === 0 ||
      Object.keys(plans).indexOf("pay-as-you-go") > -1
    )
      return undefined;
    let p = { ...plans["free"] };
    p.id = "pay-as-you-go";
    plans["pay-as-you-go"] = p;
    setPlans({ ...plans });
  }, [plans]);

  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Stack gap={4}>
          <Stack gap={1.5}>
            <Typography css={fontTypes(theme).title}>Your Token</Typography>
            <ProgressWithLabel current={remainQuota} maximum={allocQuota} />
          </Stack>
          <Grid container spacing={2}>
            {Object.keys(plans).map((key) => {
              let value = plans[key];
              if (key === "pay-as-you-go" && currentPlan === "free")
                return null;
              return (
                <PlanCard
                  key={key}
                  plan={value}
                  currentPlan={currentPlan}
                  cancelAtPeriodEnd={cancelAtPeriodEnd}
                />
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
