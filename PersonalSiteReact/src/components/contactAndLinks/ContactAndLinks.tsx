import styles from './ContactAndLinks.module.css'

// function ContactInfo() {
//     return (
//         <div>
//             <p>Email: bryansantini@yahoo.com</p>
//         </div>
//     )
// }

function Links() {
    return (
        <div className={styles.profilePictureTitleContainer}>
  <a
    className={styles.linkInButton}
    href="https://www.linkedin.com/in/bryan-santini-62343a202"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>

    )
}

export function ContactAndLinks() {
    return (
        <div className={styles.contactAndLinksContainer}>
            <div>
                <Links />
            </div>
        </div>
    );
}