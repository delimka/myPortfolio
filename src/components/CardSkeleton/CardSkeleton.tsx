import React from "react";
import styles from "./CardSkeleton.module.scss";


function CardSkeleton() {


  return Array(12)
    .fill(4)
    .map((_, index) => (
      <div className={styles.cardSkeleton} key={index}>
        <div className={styles.image}>
        </div>
        <div className={styles.heading}>
        </div>
        <div className={styles.footer}></div>
      </div>
    ));
}

export default CardSkeleton;
