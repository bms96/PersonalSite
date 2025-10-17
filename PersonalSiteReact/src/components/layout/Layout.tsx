import { ContactAndLinks } from '../contactAndLinks/ContactAndLinks';
import { HeadShotAndTitle } from '../headshotAndTitle/HeadShotAndTitle';
import { Projects } from '../projects/projects';
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <HeadShotAndTitle />
      </div>
      <div className={styles.mainContent}>
        <ContactAndLinks />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}