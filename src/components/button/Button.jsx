import styles from './button.module.css';

console.log(styles);

const Button = () => {
  // return <button className={styles.button}>Click me</button>;
  return <button className={`${styles.button} ${styles.red}`}>Click me</button>;
};

export default Button;
