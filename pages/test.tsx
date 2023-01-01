import styles from '../styles/Home.module.css';
// import FocusGraph from '../src/RoadMap/Graph';
import dynamic from 'next/dynamic';
const TestGraph = dynamic(() => import('../src/RoadMap/testGraph'), {
  ssr: false
});
export default function Home() {
  return (
    <div className={styles.container}>
      <TestGraph />
    </div>
  );
}
