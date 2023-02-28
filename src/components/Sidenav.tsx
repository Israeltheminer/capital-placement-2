import React from 'react';

const navItems = [
   { name: 'arrow', iconUrl: '/Arrow.svg' },
   { name: 'home', iconUrl: '/home.png' },
];

const Sidenav = () => {
   return (
      <div className="min-w-[76px] inline sticky top-0 h-screen left-shadow pt-2">
         <div className="pt-[120px] mb-[40px] flex flex-col gap-10">
            {navItems.map(({ name, iconUrl }) => (
               <img src={iconUrl} key={name} className="mx-auto scale-90" />
            ))}
         </div>
      </div>
   );
};

export default Sidenav;
