import styles from './BlogPostSkeleton.module.scss'

const BlogPostSkeleton = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}></div>
        <div className={styles.introduction}></div>
        <div className={styles.article}></div>      
    </div>
  )
}

export default BlogPostSkeleton;