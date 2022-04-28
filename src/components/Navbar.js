import React from "react";
import styles from './TodoItem.module.css';

const navStyle = {
  display: 'flex',
  listStyle: 'none',
}

const Navbar = () => {
  return <div><ul style={navStyle}><li className={styles.navItem}>Home</li><li className={styles.navItem}>About</li></ul></div>;
};
export default Navbar;
