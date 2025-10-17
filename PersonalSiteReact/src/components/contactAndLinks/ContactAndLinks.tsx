import styles from './ContactAndLinks.module.css'

function ContactInfo() {
    return (
        <div>
            <p>Email: bryansantini@yahoo.com</p>
        </div>
    )
}

function Links() {
    return (
        <div className={styles.profilePictureTitleContainer}>
            <button>
                <a href="https://www.linkedin.com/in/bryan-santini-62343a202" target="_blank">LinkedIn</a>
            </button>
        </div>
    )
}

export function ContactAndLinks() {
    return (
        <div className={styles.contactAndLinksContainer}>
            {/* <div>
                <ContactInfo />
            </div> */}
            <div>
                <Links />
            </div>
        </div>
    );
}