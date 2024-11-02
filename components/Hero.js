'use client';

import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 5 },
  })

  return (
    <>
      <div className="p-24"
        style={{
          background: "url('/grid_bg__optimized.webp') no-repeat center",
          backgroundPositionX: 'center',
          backgroundPositionY: 'center',
        }}
        data-testid="hero__container"
      >
        <a href="/">
          <animated.img
            src={"/logo_file.png"}
            alt="3D MACHINE AND TOOL LLC"
            style={{
              width: '100%',
              maxWidth: 350,
              height: 'auto',
              background: 'rgb(13,13,13)',
              border: '1px solid #4e4e4e99',
              boxShadow: '.0091rem .0091rem #ffffff',
              borderRadius: 5,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
              ...springs,
            }}
            className="mx-auto"
            id="hero__logo_mark"
            data-testid="hero__logo_mark"
          />
        </a>
      </div>
    </>
  );
}

export default Hero;