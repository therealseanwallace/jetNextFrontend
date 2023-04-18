import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Pagination from "@etchteam/next-pagination";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Results from "@/components/Results";
import fetchFullName from "@/helpers/fetchFullName";
import paginatorStyles from "@/styles/Pagination.module.css";
import Footer from "@/components/Footer";

const { useState } = React;

const Cat = ({ tenders }) => {
  const [tendersToUse, setTendersToUse] = useState(tenders.docs);
  const [onlyShowActive, setOnlyShowActive] = useState(true);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const router = useRouter();
  const { cat } = router.query;
  const fullName = fetchFullName(cat);

  const toggleOnlyShowActive = () => {
    setOnlyShowActive(!onlyShowActive);
    router.push({
      query: {
        ...router.query,
        onlyShowActive: !onlyShowActive,
      },
    });
  };

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  }

  useEffect(() => {
    setTendersToUse(tenders.docs);
  }, [tenders]);

  return (
    <>
      <Head>
        <title>Just Education Tenders</title>
      </Head>
      <main className={styles.main}>
        <Header
          catName={fullName}
          onlyShowActive={onlyShowActive}
          toggleOnlyShowActive={toggleOnlyShowActive}
        />
        <Pagination
          total={tenders.totalDocs}
          sizes={[20]}
          theme={paginatorStyles}
        />
        <Results tenders={tendersToUse} togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy}/>
        <Pagination
          total={tenders.totalDocs}
          sizes={[20]}
          theme={paginatorStyles}
        />
        <Footer togglePrivacyPolicy={togglePrivacyPolicy}/>
      </main>
    </>
  );
};

export default Cat;

export async function getServerSideProps({ query, params }) {
  const categoryTenders = await fetch(
    `http://localhost:3001/api/tenders/category/${params.cat}/page/${query.page}/onlyShowActive/${query.onlyShowActive}`
  );
  const tenders = await categoryTenders.json();

  return {
    props: {
      tenders,
    },
    // revalidate: 900,
  };
}
