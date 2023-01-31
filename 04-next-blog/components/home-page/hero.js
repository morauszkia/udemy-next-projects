import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/andras.jpg"
          alt="An image showing András"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm András</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Vue
      </p>
    </section>
  );
};

export default Hero;
