const AnimatedNavLink = ({ link, text }) => {
  return (
    <>
      <a
        href={link}
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out"
      >
        {text}
      </a>
    </>
  );
}

export default AnimatedNavLink;