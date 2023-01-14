import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}> {props.children} </main>
      {/*<Footer />       */}
    </div>
  );
}

export default Layout;
