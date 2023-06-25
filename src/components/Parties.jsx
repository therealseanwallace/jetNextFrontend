import styles from "@/styles/Parties.module.css";

const Parties = ({ parties }) => (
  <div className="tender-card-parties">
    {parties.map((party, index) => {
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
        <div key={index}>
          <p key={index}>
            <strong>Party name:</strong> {party.name}
          </p>
          <p key={index}>
            <strong>Contact name:</strong> {contactName}
          </p>
          <div key={index}>
            <strong>Contact email:</strong> <p key={index}>{email}</p>
          </div>
          <div>
            <p key={index}>
              <strong>Contact website:</strong> {url}
            </p>
            <p key={index}>
              <strong>Buyer website:</strong> {buyerProfile}
            </p>
          </div>
          <div>
            <strong>Roles:</strong>
            <div className={styles.roles}>
            {party.roles.map((role) => (
              <p key={index} className={styles.role}>{role}</p>
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
