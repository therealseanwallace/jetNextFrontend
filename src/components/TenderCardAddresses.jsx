import { v4 as uuidv4 } from "uuid";
import styles from "@/styles/TenderCardAddresses.module.css";

const TenderCardAddresses = ({ addresses }) => {
  const addressesToDisplay = [];
  for (let i = 0; i < addresses.length; i += 1) {
    const address = addresses[i][0];
    if (address.Code) {
      if (!addressesToDisplay.includes(address.Code)) {
        addressesToDisplay.push(address.Code);
      }
    }
    if (address.region) {
      if (!addressesToDisplay.includes(address.region)) {
        addressesToDisplay.push(address.region);
      }
    }
    if (address.Region) {
      if (!addressesToDisplay.includes(address.Region)) {
        addressesToDisplay.push(address.Region);
      }
    }
    if (address.postalCode) {
      if (!addressesToDisplay.includes(address.postalCode)) {
        addressesToDisplay.push(address.postalCode);
      }
    }
    if (address.countryName) {
      if (!addressesToDisplay.includes(address.countryName)) {
        addressesToDisplay.push(address.countryName);
      }
    }
  }
  return (
    <div>
      <h3 className={styles.addresstitle}>Delivery addresses:</h3>
      <div className={styles.tendercardaddresses}>
        {addressesToDisplay.map((address) => (
          <p key={uuidv4()} className={styles.tendercardaddress}>
            {address}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TenderCardAddresses;
