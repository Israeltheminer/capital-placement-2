import { useState } from 'react';
import Button from '@mui/material/Button';

import { motion, useAnimationControls } from 'framer-motion';
import ProfilePage from './ProfilePage';
import VideoPage from './VideoPage';

export const mainButtonStyle = {
   fontSize: '14px',
   paddingX: '32px',
   fontWeight: '600',
   position: 'absolute',
   top: '-32px',
   textTransform: 'none',
};

const CandidateInfo = () => {
   const navControls = useAnimationControls();
   const pageControls = useAnimationControls();
   const [navDetails] = useState([{ name: 'Profile' }, { name: 'Video' }, { name: 'Evaluation' }, { name: 'Notes' }]);

   return (
      <div className="flex-1 mt-10 py-12 ml-[4%] mr-[5%] relative candidate_info_width">
         <div className="border-b border-[#B5B5B5] pb-2 relative cursor-pointer">
            {navDetails?.map(({ name }, index) => (
               <span
                  className="w-[116px] text-sm font-semibold inline-block h-8 text-center leading-[160%]"
                  key={index}
                  onClick={() => {
                     navControls.stop();
                     pageControls.stop();
                     navControls.start({ x: `${index * 116}px` });
                     pageControls.start({ x: `${index * -100}%` });
                  }}
               >
                  {name}
               </span>
            ))}
            <div className="absolute bottom-[-9px] left-0 w-full">
               <motion.span className="inline-block w-[116px] bg-black h-1" animate={navControls}></motion.span>
            </div>
         </div>
         <div className="w-full overflow-x-hidden">
            <motion.div className="flex flex-nowrap" animate={pageControls}>
               <ProfilePage />
               <VideoPage />
            </motion.div>
         </div>
         <Button
            variant="contained"
            sx={{
               ...mainButtonStyle,
               backgroundColor: '#000',
               right: '0',
               ':hover': {
                  backgroundColor: '#000',
               },
            }}
         >
            Move to Shortlist
         </Button>
         <Button
            variant="text"
            sx={{
               ...mainButtonStyle,
               right: '192px',
               color: '#A80000',
            }}
         >
            <img src="/cancel.svg" alt="" className="mr-1" /> Disqualify
         </Button>
      </div>
   );
};

export default CandidateInfo;
