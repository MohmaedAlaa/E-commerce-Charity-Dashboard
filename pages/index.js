import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dashboard from "./Dashboard";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mytreety</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
        <meta charset="utf-8" />
      </Head>
     
      
      
          <Dashboard/>
    
    </div>
  );
}
