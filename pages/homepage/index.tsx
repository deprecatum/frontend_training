import styles from './homepage.module.css';
import { Header } from '../../layout/components/Header';

export const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
    </div>
  );
}

export default Homepage;
