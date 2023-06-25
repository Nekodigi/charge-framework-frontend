"use client";
import { Layout } from "@/components/organisms/Layout";
import React from "react";

export default function ParentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
