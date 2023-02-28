import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimationControls } from 'framer-motion';

const newCandidates = [
   {
      name: 'John Smith',
      location: 'New York, USA',
      degree: 'BSC Computer Science',
      image: './avatar1.png',
   },
   {
      name: 'Sarah Johnson',
      location: 'London, UK',
      degree: 'MA Business Administration',
      image: './avatar2.png',
   },
   {
      name: 'Michael Chen',
      location: 'Shanghai, China',
      degree: 'BSC Electrical Engineering',
      image: './avatar3.png',
   },
   {
      name: 'Emily Lee',
      location: 'Sydney, Australia',
      degree: 'MA Psychology',
      image: './avatar1.png',
   },
   {
      name: 'David Kim',
      location: 'Toronto, Canada',
      degree: 'BSC Mathematics',
      image: './avatar2.png',
   },
   {
      name: 'Maria Rodriguez',
      location: 'Madrid, Spain',
      degree: 'MA Linguistics',
      image: './avatar3.png',
   },
   {
      name: 'James Park',
      location: 'Seoul, South Korea',
      degree: 'BSC Chemistry',
      image: './avatar1.png',
   },
   {
      name: 'Samantha Wong',
      location: 'Hong Kong, China',
      degree: 'MA Fine Arts',
      image: './avatar2.png',
   },
   {
      name: 'Mohammed Ahmed',
      location: 'Cairo, Egypt',
      degree: 'BSC Civil Engineering',
      image: './avatar3.png',
   },
   {
      name: 'Hannah Kim',
      location: 'Los Angeles, USA',
      degree: 'MA Education',
      image: './avatar1.png',
   },
   {
      name: 'Ali Hassan',
      location: 'Lahore, Pakistan',
      degree: 'BSC Mechanical Engineering',
      image: './avatar2.png',
   },
   {
      name: 'Emma Brown',
      location: 'Melbourne, Australia',
      degree: 'MA Sociology',
      image: './avatar3.png',
   },
   {
      name: 'Derek Tan',
      location: 'Singapore, Singapore',
      degree: 'BSC Business Administration',
      image: './avatar1.png',
   },
   {
      name: 'Julia Lee',
      location: 'Vancouver, Canada',
      degree: 'MA History',
      image: './avatar2.png',
   },
   {
      name: 'Muhammad Ali',
      location: 'Karachi, Pakistan',
      degree: 'BSC Computer Engineering',
      image: './avatar3.png',
   },
   {
      name: 'Kim Nguyen',
      location: 'Hanoi, Vietnam',
      degree: 'MA Literature',
      image: './avatar1.png',
   },
   {
      name: 'Tom Wilson',
      location: 'Berlin, Germany',
      degree: 'BSC Physics',
      image: './avatar2.png',
   },
   {
      name: 'Sophie Martin',
      location: 'Paris, France',
      degree: 'MA International Relations',
      image: './avatar3.png',
   },
   {
      name: 'Sarah Johnson',
      location: 'London, UK',
      degree: 'MA Business Administration',
      image: './avatar2.png',
   },
   {
      name: 'Michael Chen',
      location: 'Shanghai, China',
      degree: 'BSC Electrical Engineering',
      image: './avatar3.png',
   },
];

const CandidateList = () => {
   const { ref, inView, entry } = useInView({
      threshold: 0,
   });
   const [items, setItems] = useState(newCandidates);
   useEffect(() => {
      const timer =
         inView && items.length < 60
            ? setTimeout(() => {
                 setItems((prev) => [...prev, ...newCandidates]);
              }, 2000)
            : 0;
      return () => clearTimeout(timer);
   }, [inView]);
   const [filterKey, setFilterKey] = useState('');
   const controls = useAnimationControls();
   return (
      <div className="w-[376px]">
         <div className="bg-[#F6F8F9] w-[376px] rounded-md flex flex-col max-h-screen overflow-y-auto sticky top-0">
            <div className="p-4">
               <div className="flex border-b pb-2 border-[#B5B5B5] my-5 relative">
                  <span
                     className="text-xs cursor-pointer h-7 leading-[160%] text-center font-semibold text-[#a5a5a5] min-w-[50%]"
                     onClick={() => {
                        controls.stop();
                        controls.start({ x: 0 });
                     }}
                  >
                     QUALIFIED
                  </span>
                  <span
                     className="text-xs cursor-pointer h-7 leading-[160%] text-center font-semibold text-[#a5a5a5] min-w-[50%]"
                     onClick={() => {
                        controls.stop();
                        controls.start({ x: '100%' });
                     }}
                  >
                     DISQUALIFIED
                  </span>
                  <div className="absolute bottom-[-9px] left-0 w-full">
                     <motion.span className="inline-block w-[50%] bg-black h-1" animate={controls}></motion.span>
                  </div>
               </div>
               <TextField
                  id="filter-candidate"
                  fullWidth={true}
                  placeholder="Filter by name email, edu and exp"
                  value={filterKey}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     setFilterKey(() => event.target.value);
                  }}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <SearchIcon />
                        </InputAdornment>
                     ),
                     sx: {
                        fontSize: '14px',
                        marginY: '8px',
                        backgroundColor: '#fff',
                        '::placeholder': {
                           color: '#979797',
                        },
                     },
                  }}
               />
               <div className="border-b pb-2 border-[#B5B5B5] px-10 py-2 mb-4">
                  <span className="text-xs text-[#898A8D]">Select all</span>
               </div>
            </div>
            <ul className="candidate-list-box flex-1 flex flex-col">
               {items.map(({ name, image, degree, location }, i) => (
                  <li
                     className="bg-white h-[104px] cursor-pointer flex items-center rounded-md shadow-md scale-95 hover:scale-[0.985] mb-3 transition-transform ease-in-out"
                     key={`${name}${i}`}
                  >
                     <span className="overflow-hidden rounded-full h-[54px] max-w-[54px] bg-slate-600 mx-5">
                        <img src={image} alt="candidate-image" />
                     </span>
                     <span>
                        <h1 className="font-bold text-base leading-[180%]">{name}</h1>
                        <p className="text-xs leading-[180%] relative ml-6">
                           <img
                              src="/location.svg"
                              alt=""
                              className="absolute left-[-24px] top-[50%] translate-y-[-50%]"
                           />
                           {location}
                        </p>
                        <p className="text-xs leading-[180%] relative ml-6">
                           <img src="/cap.svg" alt="" className="absolute left-[-24px] top-[50%] translate-y-[-50%]" />
                           {degree}
                        </p>
                     </span>
                  </li>
               ))}
               {items.length < 60 ? (
                  <div className="flex justify-center" ref={ref}>
                     <RefreshRoundedIcon className="animate-spin" />
                  </div>
               ) : (
                  <p className="font-semibold text-sm text-center opacity-75 mt-3 relative">All Canditates</p>
               )}
            </ul>
         </div>
      </div>
   );
};

export default CandidateList;
