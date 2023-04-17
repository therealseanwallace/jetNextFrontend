import { Montserrat } from 'next/font/google';
import styles from "@/styles/globals.css";


const montserrat = Montserrat({ weights: ["400", "500", "600", "700"], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
