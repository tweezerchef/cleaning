import styles from "./css/About.module.css";
import Image from "next/image";

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textBox1}>
        <p>
          Born and raised in the vibrant streets of New Orleans, Naiomi has been
          making homes sparkle across the city for over a decade.
        </p>
      </div>

      <div className={styles.textBox2}>
        <p>
          What started as a commitment to helping neighbors maintain their
          beautiful historic homes has blossomed into Naiomi Cleans, a trusted
          local cleaning service that brings both professional excellence and
          authentic New Orleans care to every home we enter.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/washingDishes.webp"
          alt="About"
          fill
          className={styles.responsiveImage}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.textBox3}>
        <p>
          Drawing on her deep roots in the community and understanding of our
          unique local architecture – from shotgun houses to Garden District
          mansions – Naiomi ensures each space receives the specialized
          attention it deserves.
        </p>
      </div>

      <div className={styles.textBox4}>
        <p>
          Our service isn't just about cleaning; it's about preserving the charm
          and character of New Orleans homes while creating fresh, welcoming
          spaces for the families who live in them.
        </p>
      </div>
    </div>
  );
}
