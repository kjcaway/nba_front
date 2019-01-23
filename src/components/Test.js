import React from 'react';
import styles from './Test.module.css';
import common_styles from './Common.module.css';

const Test = () => {
  return <div className={common_styles.conatiner}><div className={styles.wrapper}>What about CSS Module?</div></div>;
};

export default Test;