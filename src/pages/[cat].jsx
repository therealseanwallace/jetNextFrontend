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
import getCategory from "@/helpers/getCategory";
import queryDB from "@/helpers/queryDB";


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
  };

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
          cat={cat}
          catName={fullName}
          onlyShowActive={onlyShowActive}
          toggleOnlyShowActive={toggleOnlyShowActive}
        />
        <Pagination
          total={tenders.totalDocs}
          sizes={[20]}
          theme={paginatorStyles}
        />
        <Results
          tenders={tendersToUse}
          togglePrivacyPolicy={togglePrivacyPolicy}
          showPrivacyPolicy={showPrivacyPolicy}
        />
        <Pagination
          total={tenders.totalDocs}
          sizes={[20]}
          theme={paginatorStyles}
        />
        <Footer togglePrivacyPolicy={togglePrivacyPolicy} />
      </main>
    </>
  );
};

export default Cat;

/* export async function getServerSideProps({ query, params, res }) {
  let { page, onlyShowActive } = query;
  const { cat } = params;
  if (!page) page = 1;
  if (!onlyShowActive) onlyShowActive = true;
  const categoryTenders = await fetch(
    `https://api.justeducationtenders.co.uk/api/tenders/category/${cat}/page/${page}/onlyShowActive/${onlyShowActive}`,
    {
      method: "GET",
      mode: "cors"
    }
  );
  console.log('categoryTenders', categoryTenders);
  const tenders = await categoryTenders.json();
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate");
  return {
    props: {
      tenders,
      cat,
    },
    // revalidate: 900,
  };
} */


export async function getServerSideProps({ query, params, res }) {

  let { page, onlyShowActive } = query;
  const { cat } = params;
  if (!page) page = 1;
  if (!onlyShowActive) onlyShowActive = true;
  const catArray = getCategory(cat).codes;
  if (catArray === null) {
    return res.status(404).json({ error: "Category not found" });
  }
  const response = await queryDB(catArray, page, onlyShowActive);
  const tenderDocs = response.docs.map((tender) => {
    const { _id, ...newTender } = tender.toObject();
    return newTender;
  });
  const { docs, ...tenders } = {...response};
  tenders.docs = tenderDocs;
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate");

  return {
    props: {
      tenders,
      cat,
    },
    // revalidate: 900,
  };
}