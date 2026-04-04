import './homepage.css';
import { Header } from '../../components/Header';

export function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="content">
        <h1>Welcome to the Homepage</h1>
        <p>This is the main content of the homepage.</p>
        <img src="logo512.png" alt="logo" />
      </div>
    </div>
  );
}

export default Homepage;
