import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Results from "@/components/Results";
import fetchFullName from "@/helpers/fetchFullName";
import Pagination from '@etchteam/next-pagination';

const { useState } = React;

const Cat = ( { tenders }) => {
  const [ tendersToUse, setTendersToUse ] = useState(tenders.docs);

  
  const router = useRouter();
  const { cat } = router.query;
  const fullName = fetchFullName(cat);
  
  useEffect(() => {
    setTendersToUse(tenders.docs);
  }, [tenders]);

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
        <Pagination total={tenders.totalDocs} />
        <Results tenders={tendersToUse}/>
        <Pagination total={tenders.totalDocs} />
      </main>
    </>
  );
};

export default Cat;

export async function getServerSideProps( { query, params }, ) {
  const categoryTenders = await fetch(
    `http://localhost:3001/api/tenders/category/${params.cat}/page/${query.page}/onlyShowActive/true`
  );
  const tenders = await categoryTenders.json();

  return {
    props: {
      tenders,
    },
    // revalidate: 900,
  };
}
