'use client';

import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 5 },
  })

  return (
    <>
      <div>
        <animated.img
          src={"/logo_mark.png"}
          alt="3D MACHINE AND TOOL LLC"
          style={{
            width: 80,
            height: 120,
            background: '#cc4b4b',
            borderRadius: 8,
            paddingLeft: 4,
            paddingRight: 4,
            ...springs,
          }}
          className="mx-auto"
          id="hero__logo_mark"
        />
        <div
          className="w-full text-center mt-[.55669rem] text-gray-400 hover:text-gray-200"
          style={{
            letterSpacing: '-1px',
          }}
          id="hero__title"
        >
          3D MACHINE + TOOL LLC
        </div>
      </div>
    </>
  );
}

export default Hero;