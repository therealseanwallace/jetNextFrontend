import Image from "next/image";
import githubLogo from "../assets/github-mark.png";
import linkedInLogo from "../assets/LI-In-Bug.png";
import styles from "@/styles/Footer.module.css";

const Footer = ({ togglePrivacyPolicy }) => {
  return (
    <footer>
      <hr />
      <div className="footer-top">
        <button
          onClick={togglePrivacyPolicy}
          type="button"
          className={styles.button}
        >
          Toggle Privacy Policy
        </button>
        <h3>Please note:</h3> This web application is in a pre-release or beta
        stage of development and may undergo unplanned changes or shutdowns or
        delays in loading results.
      </div>
      <div className="footerbottom">
        <p className="disclaimer">
          Contains public sector information licensed under the Open Government
          Licence v3.0. <br />
          Tenders are sourced from official UK government sources (Find A Tender
          Service and Contracts Finder Service) and used under the{" "}
          <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
            Open Government Licence
          </a>
          . <br /> <br />
          However, this website is NOT an official source and the maintainer of
          this website makes no claims regarding the accuracy or completeness of
          the information contained within. <br /> <br />
          Do NOT base your bidding decisions on this information -{" "}
          <strong>always</strong> check official sources!
        </p>
      </div>
      <div className="version-container">
        <strong>Version:</strong> 0.4.0 <br />
        <strong>Release date:</strong> 18/4/2023 <br />
        <strong>Release notes:</strong>
        <ul>
          <li>Migrated frontend to Next.js</li>
          <li>Added dynamic routes and automatic fetching of tenders</li>
        </ul>
      </div>
      <div className={styles.copyrightstatementsociallinkscontainer}>
        <p className="copyright-statement">
          Designed and Developed by Sean Patrick Wallace © 2023
        </p>
        <div className={styles.sociallinks}>
        <a href="https://github.com/therealseanwallace/freeEducationTenders">
          <Image
            src={githubLogo}
            alt="GitHub link"
            className={styles.sociallink}
          />
        </a>
        <a href="https://www.linkedin.com/in/sean-wallace-338a53198/">
          <Image
            src={linkedInLogo}
            alt="LinkedIn link"
            className={styles.sociallink}
          />
        </a>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;

