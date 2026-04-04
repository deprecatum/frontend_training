import styles from './header.module.css';

export const Header = () => {
    return (
      <header className={styles.header}>
        <img src="logo192.png" className={styles.logo} alt="logo" />
        <div className={styles.container} >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
      </header>
    )
}
