import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Results from "@/components/Results";
import fetchFullName from "@/helpers/fetchFullName";

const Cat = (props) => {
  console.log("Cat! Props are ", props);
  const { tenders } = props;
  const router = useRouter();
  const { cat } = router.query;
  const fullName = fetchFullName(cat);

  return (
    <>
      <Head>
        <title>Just Education Tenders</title>
        <meta
          name="description"
          content="UK Education Tenders updated in real time - always free and no signup needed"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header catName={fullName} />
        <Results tenders={tenders} cat={cat}/>
      </main>
    </>
  );
};

export default Cat;



export async function getServerSideProps({ params }) {
  const categoryTenders = await fetch(
    `http://localhost:3001/api/tenders/category/${params.cat}/page/0/onlyShowActive/true`
  );
  const tenders = await categoryTenders.json();

  return {
    props: {
      tenders,
    },
    // revalidate: 900,
  };
}