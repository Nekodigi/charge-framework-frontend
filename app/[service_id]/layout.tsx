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

type Props = {
  params: { service_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params }: { params: { service_id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/${params.service_id}`
  );
  let name;
  name = (await res.json()).name;

  return {
    title: name,
    //description: "Manage account and subscription for Nekodigi services",
  };
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   //const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   //const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: "AAA",
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
