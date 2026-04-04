import './homepage.css';

export function Homepage() {
  return (
    <div className="homepage">
      <header className='header'>
        <img src="logo192.png" className="logo" alt="logo" />
        <div className='container'>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
