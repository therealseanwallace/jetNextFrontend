
import { v4 as uuidv4 } from "uuid";
import React from 'react'
import TenderCard from './TenderCard';


const Results = ( { tenders } ) => {
  console.log('Results! tenders', tenders);
  return (
    <div className="results-display">
      {tenders.docs.map((tender) => (
        <TenderCard key={uuidv4()} tender={tender} />
      ))}
      
    </div>
  );
}

export default Results
