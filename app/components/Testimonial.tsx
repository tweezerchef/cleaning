import TestimonialCarousel from "./subComponents/TestimonialCarousel";
import styles from "./css/Testimonial.module.css";

export const Testimonial = () => {
  return (
    <div className={styles.container}>
      <TestimonialCarousel />
    </div>
  );
};
