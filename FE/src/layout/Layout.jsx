import Header from './Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>{props.children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
