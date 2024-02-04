import styles from "./CardSkeleton.module.scss";


function CardSkeleton() {


  return Array(12)
    .fill(4)
    .map((_, index) => (
      <li className={styles.cardSkeleton} key={index}>
        <div className={styles.image}>
        </div>
        <div className={styles.heading}>
        </div>
        <div className={styles.footer}></div>
      </li>
    ));
}

export default CardSkeleton;
