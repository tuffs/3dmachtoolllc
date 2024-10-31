import AnimatedNavLink from '@/components/ui/AnimatedNavLink';
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
    <ul className="block mt-6 ml-3 md:ml-0 md:mt-12 md:flex md:justify-center md:space-x-4">
      {links.map((navItemEl, index) => {
        return (
          <li
            key={index}
          > 
            <AnimatedNavLink link={navItemEl.href} text={navItemEl.label} />
          </li>
        )
      })}
    </ul>
  );
}

export default Navbar;
