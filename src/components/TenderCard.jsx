import Collapsible from "react-collapsible";
import TenderCardAddresses from "./TenderCardAddresses";
import Parties from "./Parties";
import styles from "@/styles/TenderCard.module.css";

const TenderCard = ({ tender }) => {
  const tags = [];
  tags.push(tender.tenderStatus);
  tags.push(...tender.tag);
  const tagsMap = tags.map((tag, index) => {
    let uniqueClass;
    switch (tag) {
      case "planning":
        uniqueClass = "planning";
        break;
      case "planned":
        uniqueClass = "planned";
        break;
      case "tender":
        uniqueClass = "tender";
        break;
      case "active":
        uniqueClass = "active";
        break;
      case "award":
        uniqueClass = "award";
        break;
      case "complete":
        uniqueClass = "complete";
        break;
      case "cancelled":
        uniqueClass = "cancelled";
        break;
      default:
        uniqueClass = "default";
        break;
    }
    return (
      <p key={index} className={`tag ${uniqueClass}`}>
        {tag}
      </p>
    );
  });

  const generateSubmissionMethod = () => {
    if (tender.submissionMethod) {
      if (tender.submissionMethod.type === "url") {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(tender.submissionMethod.value);
            }}
            type="button"
            className={styles.submissionlink}          >
            Link to submission{" "}
            <span className={styles.newtab}>{"(opens new tab)"}</span>
          </button>
        );
      }
      return (
        <p className="tender-card-submission-method-text">
          {tender.submissionMethod.value}
        </p>
      );
    }
    return "";
  };

  const generateEndDate = () => {
    if (tender.endDate) {
      return (
        <p>
          <span className={styles.valuelabel}>End date:</span>{" "}
          <span className={styles.value}>{tender.endDate}</span>{" "}
        </p>
      );
    }
    return "";
  };

  const generateValue = () => {
    if (tender.value) {
      return (
        <p>
          <span className={styles.valuelabel}>Value:</span>{" "}
          <span className={styles.value}>{tender.value}</span>
        </p>
      );
    }
    return "";
  };

  const returnCollapsibleButton = (content) => (
    <button className={styles.collapsiblebutton} type="button">
      <p className={styles.collapsiblebuttontext}>{content}</p>
    </button>
  );

  return (
    <div className={styles.tendercard}>
      <div className={styles.tendercardupper}>
        <h2 className={styles.tendercardtitle}>{tender.title}</h2>
        <p className={styles.tendercardbuyer}>{tender.parties[0].name}</p>
        {generateValue()}
        
        <p>
          <span className={styles.valuelabel}>Released:</span>{" "}
          <span className={styles.value}>{tender.date}</span>
        </p>
        {generateEndDate()}
        {generateSubmissionMethod()}
        <div className={styles.tags}>
          <h3>Tags: </h3>
          {tagsMap}
        </div>
        {<TenderCardAddresses addresses={tender.deliveryAddresses} />}
      </div>
      <hr />
      <p className={styles.expandinstructions}>Click description/parties to expand</p>

      <Collapsible
        trigger={returnCollapsibleButton("Description")}
        className="description-collapsible"
      >
        {tender.description}
      </Collapsible>

      <Collapsible
        trigger={returnCollapsibleButton("Parties")}
        className="parties-collapsible"
      >
        <Parties parties={tender.parties} />
      </Collapsible>
    </div>
  );
};

export default TenderCard;
