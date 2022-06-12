import Head from "next/head";
import Styles from "../styles/Home.module.scss";
import Image from "next/image";
import drawers from "../images/drawers.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <meta name="description" content="Article preview component" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        />
      </Head>

      <main className={Styles.CardContainer}>
        <div className={Styles.Card}>
          <Image src={drawers} />
          <div className={Styles.CardContent}>
            <h1 className={Styles.CardHeading}>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className={Styles.CardText}>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&apos;ve got some simple
              tips to help you make any room feel complete.
            </p>
            <div className={Styles.CardAuthor}>
              {/* <image /> */}
              <h2 className={Styles.CardName}>Michelle Appleton</h2>
              <p className={Styles.CardDate}>28 Jun 2020</p>
              {/* <button>Share</button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
