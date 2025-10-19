import { ContactAndLinks } from '../contactAndLinks/ContactAndLinks';
import { HeadShotAndTitle } from '../headshotAndTitle/HeadShotAndTitle';
import { Projects } from '../projects/Projects';
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <HeadShotAndTitle />
        <div className={styles.aboutMeSection}>
          <div className={styles.aboutMeTitleDiv}>
            <h2>Hello!</h2>
          </div>
          <div>
            <p>
              I am a Full-Stack Software Engineer who is experienced in developing custom software tools that help solve real problems for businesses.
              Delivering software that provides a positive and measurable impact is my passion.
            </p>
            <p>
              If you are an individual or business who can benefit from my services, please feel free to reach out to me via the LinkedIn button.
            </p>
            {/* deliver feature development, maintenance, deployment, full rewrites, and building applications from the ground up. */}
          </div>
        </div>
      </div>


      {/* TODO: Move to component */}
      {/* About me */}
      <div className={styles.mainContent}>


        {/* TODO: Move to component */}
        {/* About me */}
        <div className={styles.servicesProvidedSection}>
          <div className={styles.servicesProvidedTitleDiv}>
            <h2 className={styles.servicesProvideTitleText}>Services offered</h2>
          </div>

          <div className={styles.servicesContainer}>

            <div className={styles.service}>
              <div className={styles.serviceTitle}>
                <h2>Web Applications</h2>
              </div>
              <div className={styles.serviceContent}>
                <p>Custom web solutions built to streamline your business operations and engage your customers.
                  Whether you need an internal tool, booking platform, or e-commerce site, I create responsive, secure, and easy-to-use web applications that work on any device.</p>
              </div>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceTitle}>
                <h2>Personal Sites</h2>
              </div>
              <div className={styles.serviceContent}>
                <p>Professionally designed personal or portfolio websites that highlight your story, skills, and brand.
                  I’ll help you establish a strong online presence with a site that’s fast, modern, and simple to update — perfect for showcasing your work, achievements, or services.</p>
              </div>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceTitle}>
                <h2>Desktop applications</h2>
              </div>
              <div className={styles.serviceContent}>
                <p>
                  Cross-platform desktop software tailored to your workflow.
                  From productivity tools to specialized business applications, I develop reliable, efficient programs that run smoothly on macOS, Windows, and Linux — built around your specific needs.
                </p>
              </div>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceTitle}>
                <h2>Mobile applications</h2>
              </div>
              <div className={styles.serviceContent}>
                <p>
                  Intuitive mobile apps that bring your idea directly to your users’ fingertips.
                  I build mobile experiences that are fast, responsive, and visually appealing — whether you need an iOS app, Android app, or both — helping you connect with customers wherever they are.
                </p>
              </div>
            </div>

          </div>


        </div>


      </div>
    </div>
  );
}