import { ContactAndLinks } from '../contactAndLinks/ContactAndLinks';
import styles from './HeadShotAndTitle.module.css'

function ProfilePicture() {
    return (<>
        <img className={styles.profilePicture} 
        src="/profilepicture.jpeg" 
        alt="Headshot" 
        />
    </>)
}

function NameAndTitle() {
    return (<>
        <div className={styles.nameDiv}>
            <h1 className={styles.nameText}>Bryan Santini</h1>
        </div>
        <div className={styles.titleDiv}>
            <h3 className={styles.titleText}>Full-Stack Software Engineer</h3>
        </div>
        <div className={styles.locationDiv}>
            <h4 className={styles.locationText}>Philadelphia, Pennsylvania, United States</h4>
        </div>
        <div className={styles.linksDiv}>
            <ContactAndLinks />
        </div>
    </>)
}

export function HeadShotAndTitle() {
    return (
        <div className={styles.profilePictureTitleContainer}>
            <div className={styles.profilePictureDiv}>
                <ProfilePicture />
            </div>
            <div className={styles.nameTitleContainer}>
                <NameAndTitle />
            </div>
        </div>
    );
}