import { useState } from 'react';
import { Navbar, Sidenav, CandidateList, CandidateInfo } from './components';

function App() {
   const [count, setCount] = useState(0);

   return (
      <main className="flex items-stretch mb-auto grow relative max-w-screen">
         <Sidenav />
         <div className="flex-1 max-w-full">
            <div className="h-[80px] flex gap-7 px-6 items-center">
               <h1 className="font-bold text-xl">Marketing and Business Development Intern</h1>
               <p className="text-sm cursor-pointer underline">SaaSLeads</p>
               <p className="text-sm cursor-pointer">London,UK</p>
               <p className="text-sm cursor-pointer">View job description</p>
            </div>
            <Navbar activeLink="Recommended" />
            <div className="flex max-w-full">
               <CandidateList />
               <CandidateInfo />
            </div>
         </div>
      </main>
   );
}

export default App;
