
import { v4 as uuidv4 } from "uuid";
import React from 'react'
import TenderCard from './TenderCard';
import styles from "@/styles/Results.module.css";
import PrivacyPolicy from "@/components/PrivacyPolicy";


const Results = ( { tenders, showPrivacyPolicy } ) => {
  console.log('Results! tenders', tenders);
  if (!showPrivacyPolicy) return (
    <div className={styles.resultsdisplay}>
      {tenders.map((tender) => (
        <TenderCard key={uuidv4()} tender={tender} />
      ))}
      
    </div>
  )
  return (
    <div className={styles.resultsdisplay}>
      <PrivacyPolicy />
    </div>

  )

}

export default Results
