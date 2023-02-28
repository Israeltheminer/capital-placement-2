const navItems = [
   { name: 'Recommended', count: 3 },
   { name: 'Shortlisted', count: 0 },
   { name: 'Offer', count: 1 },
   { name: 'Hired', count: 0 },
];

const Navbar = ({ setActiveLink, activeLink }: { activeLink?: string; setActiveLink?: Function }) => {
   return (
      <nav className="h-[120px] flex min-w-full mb-9 border-b border-[#B5B5B5]">
         {navItems.map(({ name, count }, index) => (
            <div className="flex relative" key={'nav' + index}>
               <div
                  className="h-full min-w-[275px] grid place-content-center cursor-pointer text-center"
                  style={{
                     backgroundColor: name === activeLink ? '#00635B' : 'transparent',
                  }}
               >
                  <h1
                     className="font-semibold text-2xl mb-4"
                     style={{ color: name === activeLink ? '#fff' : '#00635b' }}
                  >
                     {count}
                  </h1>
                  <p className="text-center text-xs" style={{ color: name === activeLink ? '#fff' : '#00635b' }}>
                     {name}
                  </p>
               </div>
               {name !== activeLink ? (
                  <div className="border-r h-[70px] my-auto"></div>
               ) : (
                  <div className="left-[50%] translate-x-[-50%] absolute bottom-[-15px] z-10">
                     <svg width="72" height="19" viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.9231 19L0.233887 0.751724H71.6124L35.9231 19Z" fill="#00635B" />
                     </svg>
                  </div>
               )}
            </div>
         ))}
      </nav>
   );
};

export default Navbar;
