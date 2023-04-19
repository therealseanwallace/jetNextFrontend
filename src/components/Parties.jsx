import { v4 as uuidv4 } from "uuid";
import styles from "@/styles/Parties.module.css";

const Parties = ({ parties }) => (
  <div className="tender-card-parties">
    {parties.map((party) => {
      let email = "";
      let contactName = "";
      let url = "";
      let buyerProfile = "";

      if (party.contactPoint) {
        if (party.contactPoint.email) {
          email = party.contactPoint.email;
        }
        if (party.contactPoint.name) {
          contactName = party.contactPoint.name;
        }
        if (party.contactPoint.url) {
          url = party.contactPoint.url;
        }
        if (party.details) {
          if (party.details.buyerProfile) {
            buyerProfile = party.details.buyerProfile;
          }
        }
      }
      return (
        <div key={uuidv4()}>
          <p key={uuidv4()}>
            <strong>Party name:</strong> {party.name}
          </p>
          <p key={uuidv4()}>
            <strong>Contact name:</strong> {contactName}
          </p>
          <div key={uuidv4()}>
            <strong>Contact email:</strong> <p key={uuidv4()}>{email}</p>
          </div>
          <div>
            <p key={uuidv4()}>
              <strong>Contact website:</strong> {url}
            </p>
            <p key={uuidv4()}>
              <strong>Buyer website:</strong> {buyerProfile}
            </p>
          </div>
          <div>
            <strong>Roles:</strong>
            <div className={styles.roles}>
            {party.roles.map((role) => (
              <p key={uuidv4()} className={styles.role}>{role}</p>
            ))}
            </div>
          </div>
          <hr />
        </div>
      );
    })}
  </div>
);

export default Parties;
