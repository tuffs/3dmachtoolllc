import navList from '@/data/navLinks';

const Navbar = () => { 
  return (
    <nav role="navigation">
      <NavLinks navList={navList} />
    </nav>
  );
}

const NavLinks = ({ navList }) => {
  return (
    <ul className="flex space-x-4">
      {navList.map((navItem, index) => {
        return (
          <li key={index}>
            <a href={navItem.href} className="text-blue-400 underline">{navItem.label}</a>
          </li>
        )
      })}
    </ul>
  );
}

export default Navbar;
