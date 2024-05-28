import FlowBuilder from "@/components/FlowBuilder";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>ChatFlow Builder || Bitespeed</title>
      </Head>

      <FlowBuilder />
    </main>
  );
}
