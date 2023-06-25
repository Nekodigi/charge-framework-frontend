/** @jsxImportSource @emotion/react */

import { fontTypes } from "@/styles/font";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Benefit, BenefitProps } from "../molecules/Benefit";
import { BasicButton } from "../atoms/BasicButton";
import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useAuthContext } from "@/utils/contexts/AuthContext";
import { Plan } from "@/utils/types/plan";
import { planColor, planKeyType, planName } from "@/utils/consts/plan";

type PlanCardProps = {
  plan: Plan;
  currentPlan: string;
  cancelAtPeriodEnd: boolean;
};
export const PlanCard = ({
  plan,
  currentPlan,
  cancelAtPeriodEnd,
}: PlanCardProps) => {
  const { service_id } = useParams();
  const { user } = useAuthContext();
  const theme = useTheme();
  const [href, setHref] = useState<string | undefined>(undefined);
  const [applyMessage, setApplyMessage] = useState("Apply");
  const searchParams = useSearchParams();

  const benefits = useMemo(() => {
    return [
      plan.id === "pay-as-you-go"
        ? { checked: true, text: `Add token for this month` }
        : { checked: true, text: `${plan.quota} Token/month` },
      plan.id === "free"
        ? { checked: false, text: "Available when demand is low" }
        : { checked: true, text: "No limitation by demand" },
    ] as BenefitProps[];
  }, [plan]);

  const color = useMemo(() => {
    return planColor(theme)[plan.id as planKeyType];
  }, [plan]);

  const title = useMemo(() => {
    return planName[plan.id as planKeyType];
  }, [plan]);

  const price = useMemo(() => {
    switch (plan.id) {
      case "free":
        return "Free";
      case "basic":
        return `${plan.currency.toUpperCase()} $${plan.price}/mo`;
      case "pay-as-you-go":
        return `${plan.currency.toUpperCase()} $${plan.price}/token`;
    }
  }, [plan]);

  useEffect(() => {
    switch (plan.id) {
      case "free":
        if (cancelAtPeriodEnd) {
          setApplyMessage("Plan will be downgraded");
        } else {
          setApplyMessage("Downgrade plan");
        }
        if (currentPlan !== "free" && !cancelAtPeriodEnd) {
          setHref(`${service_id}/subscription/cancel`);
        }
        break;
      case "basic":
        if (currentPlan === "free") {
          setApplyMessage("Upgrade plan");
        }
        if (currentPlan !== "basic") {
          console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/url/${service_id}/${user?.uid}/${plan.id}?success_url=${window.location.href}&cancel_url=${window.location.href}`)
          setHref(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/url/${service_id}/${user?.uid}/${plan.id}?success_url=${window.location.href}&cancel_url=${window.location.href}`
          );
        } else {
          if (cancelAtPeriodEnd) {
            setHref(`${service_id}/subscription/resume`);
          } else {
            setHref(`${service_id}/subscription/cancel`);
          }
        }
        break;
      case "pay-as-you-go":
        setApplyMessage("Purchase tokens");
        setHref(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/url/${service_id}/${
            user?.uid
          }?quota=${500}&success_url=${window.location.href}&cancel_url=${
            window.location.href
          }`
        );
        break;
    }

    if (plan.id === currentPlan) {
      if (plan.id === "basic" && cancelAtPeriodEnd) {
        setApplyMessage("Resume plan");
      } else if (plan.id === "free" && cancelAtPeriodEnd) {
        setApplyMessage("Your plan will be downgraded");
      } else {
        setApplyMessage("You current plan");
      }
    }
  }, [plan, currentPlan, cancelAtPeriodEnd]);

  const cursor = useMemo(() => {
    switch (plan.id) {
      case "free":
        if (currentPlan === "free") return "default";
        if (!cancelAtPeriodEnd) {
          return "pointer";
        }

        break;
      case "basic":
        return "pointer";
      case "pay-as-you-go":
        return "pointer";
    }
    return "default";
  }, [plan, currentPlan, cancelAtPeriodEnd]);

  return (
    <Grid item xs={12} sm={6}>
      <Box
        borderRadius={2}
        overflow={"hidden"}
        sx={{ border: 1, borderColor: theme.palette.com.gray500 }}
      >
        <Box sx={{ backgroundColor: color, height: 8 }}></Box>
        <Stack sx={{ p: 2 }} gap={1.5}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Typography css={fontTypes(theme).title}>{title}</Typography>
            <Typography css={fontTypes(theme).subtitle}>{price}</Typography>
          </Stack>
          <Stack gap={1}>
            {benefits.map((benefit, i) => (
              <Benefit key={i} checked={benefit.checked} text={benefit.text} />
            ))}
          </Stack>
          <BasicButton
            type={currentPlan === plan.id ? "contained" : "fill"}
            color={color}
            href={
              user
                ? href
                : `/${service_id}/login?action=subscribe&plan=${
                    plan.id
                  }&link_target=${searchParams.get("link_target")}`
            }
            onClick={
              plan.id !== "free" && !cancelAtPeriodEnd ? () => {} : undefined
            }
            style={{
              cursor: cursor,
            }}
            label={applyMessage}
          />
        </Stack>
      </Box>
    </Grid>
  );
};
