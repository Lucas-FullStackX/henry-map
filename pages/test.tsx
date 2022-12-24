import styles from '../styles/Home.module.css';
import FocusGraph from '../src/RoadMap/Graph';
export default function Home() {
  return (
    <div className={styles.container}>
      <FocusGraph />
    </div>
  );
}
