import Header from './Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';
import { useLocation } from 'react-router-dom';

function Layout(props) {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main
        className={styles.main}
        style={{
          backgroundColor: pathname === '/sociallogin' ? '#f5f5f5' : 'white',
        }}
      >
        <div className={styles.content}>{props.children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
