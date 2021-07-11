import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hardik.jpg"
          alt="image showing hardik"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Hardik.</h1>
      <p>I blog about web development!</p>
    </section>
  );
};

export default Hero;
