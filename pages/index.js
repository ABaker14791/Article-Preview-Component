import React, { useState } from "react";
import Head from "next/head";
import Styles from "../styles/Home.module.scss";
import Image from "next/image";
// images
import drawers from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
// icons
import shareIcon from "../images/icon-share.svg";
import shareIconWhite from "../images/icon-share-white.svg";
import facebookIcon from "../images/icon-facebook.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  function openShare() {
    setClicked(!clicked);
  }

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Article preview component</title>
        <meta name="description" content="Article preview component" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        />
      </Head>

      <main className={Styles.CardContainer}>
        <div className={Styles.Card}>
          <Image src={drawers} className={Styles.Heroimg} />
          <div className={Styles.CardRight}>
            <div className={Styles.CardContent}>
              <h1 className={Styles.CardHeading}>
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h1>
              <p className={Styles.CardText}>
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I&apos;ve got some simple
                tips to help you make any room feel complete.
              </p>
            </div>
            {clicked ? (
              <div className={Styles.CardFooterWrapper}>
                <div className={Styles.CardFooterActive}>
                  <div className={Styles.SocialIcons}>
                    <p className={Styles.ShareText}>Share</p>

                    <Image src={facebookIcon} />
                    <Image src={twitterIcon} />
                    <Image src={pinterestIcon} />
                  </div>
                  <button className={Styles.ShareBtn} onClick={openShare}>
                    <Image src={shareIcon} />
                  </button>
                </div>
                <div className={Styles.CardFooter}>
                  <div className={Styles.AuthorContainer}>
                    <Image
                      src={avatar}
                      className={Styles.Avatar}
                      width="40"
                      height="40"
                    />
                    <div className={Styles.CardAuthor}>
                      <h2 className={Styles.CardName}>Michelle Appleton</h2>
                      <p className={Styles.CardDate}>28 Jun 2020</p>
                    </div>
                  </div>
                  <button className={Styles.ShareBtnActive} onClick={openShare}>
                    <Image src={shareIconWhite} />
                  </button>
                </div>
              </div>
            ) : (
              <div className={Styles.CardFooter}>
                <div className={Styles.AuthorContainer}>
                  <Image
                    src={avatar}
                    className={Styles.Avatar}
                    width="40"
                    height="40"
                  />
                  <div className={Styles.CardAuthor}>
                    <h2 className={Styles.CardName}>Michelle Appleton</h2>
                    <p className={Styles.CardDate}>28 Jun 2020</p>
                  </div>
                </div>
                <button className={Styles.ShareBtn} onClick={openShare}>
                  <Image src={shareIcon} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
