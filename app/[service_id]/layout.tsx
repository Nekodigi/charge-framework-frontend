import axios from "axios";
import { Metadata, ResolvingMetadata } from "next";
import { useEffect } from "react";

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/list`
  ).then((res) => res.json());

  //console.log(posts.list);
  return posts.list.map((id: string) => {
    return { service_id: id };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { service_id: string };
  parent?: ResolvingMetadata;
}): Promise<Metadata> {
  //console.log(params.service_id);
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/${params.service_id}`
  );
  return {
    title: (await res.json()).name,
    description: "Manage account and subscription for Nekodigi services",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
