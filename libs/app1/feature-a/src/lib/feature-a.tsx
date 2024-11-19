import styles from './feature-a.module.scss';

export function FeatureA() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureA!</h1>
    </div>
  );
}

export default FeatureA;
