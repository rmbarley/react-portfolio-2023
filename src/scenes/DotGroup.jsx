import AnchorLink from 'react-anchor-link-smooth-scroll';

const links = ['home', 'skills', 'projects', 'testimonials', 'contact'];

const NavLinks = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return links.map((page, i) => (
    <AnchorLink
      key={page + i}
      className={`${
        selectedPage === page ? selectedStyles : 'bg-dark-grey'
      } w-3 h-3 rounded-full`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    />
  ));
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <NavLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default DotGroup;
