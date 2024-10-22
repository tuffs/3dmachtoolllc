import links from '@/data/links';

const Navbar = () => { 
  return (
    <nav role="navigation" className="w-full">
      <Links links={links} />
    </nav>
  );
}

const Links = ({ links }) => {
  return (
    <ul className="w-full inline-block mt-6 ml-3 md:ml-0 md:mt-12 md:flex md:justify-center md:space-x-4">
      {links.map((navItemEl, index) => {
        return (
          <li
            key={index}
          >
            <a
              href={navItemEl.href}
              className="text-gray-400 hover:text-gray-300"
              style={{
                fontSize: '11px'
              }}>
                {navItemEl.label}
              </a>
          </li>
        )
      })}
    </ul>
  );
}

export default Navbar;
