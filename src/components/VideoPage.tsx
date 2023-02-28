import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Card } from '.';

const VideoPage = () => {
   const [rating, setRating] = useState<string>('');
   return (
      <div className="min-w-full p-2 flex flex-col gap-10 mt-10">
         <Card>
            <div className="flex items-center justify-between relative top-2">
               <p className="max-w-[400px] text-[15px]">
                  Candidate’s video submissions will below below, you can also ask candidate’s to submit further video.
               </p>
               <span className="gap-4 w-fit flex items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M2.42465 11.9094L1 11.9182L12.8925 11.8456L24.7851 11.7729"
                        stroke="#00635B"
                        strokeWidth="5"
                     />
                     <path
                        d="M12.7914 2.51804L12.7837 1.09338L12.8465 12.986L12.8465 24"
                        stroke="#00635B"
                        strokeWidth="5"
                     />
                  </svg>
                  <p className="text-[#00635B] text-sm font-semibold">Request video</p>
               </span>
            </div>
         </Card>
         <Card>
            <div className="flex items-center justify-between gap-10">
               <div>
                  <h2 className="text-2xl font-semibold mb-10">Tell us about yourself?</h2>
                  <span className="text-[#BABABA] text-xs border-b border-[#BABABA] inline-block w-full pb-2 mb-6">
                     Submitted on 12 Mar 2023
                  </span>
                  <div>
                     <p className="text-xs font-semibold opacity-90">Rate this video</p>
                     <div className="rate-video-input flex divide-x divide-[#000c] rounded-md mt-3 border-black h-8 border overflow-hidden">
                        {['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'sev', 'eig', 'nine', 'ten'].map(
                           (key, i) => (
                              <span
                                 key={key}
                                 className={
                                    rating === key
                                       ? 'text-center leading-[210%] text-white bg-[#00635b] cursor-pointer font-light text-sm'
                                       : 'text-center leading-[210%] hover:bg-[#00635b]/80 hover:text-white cursor-pointer font-light text-sm'
                                 }
                                 onClick={() => {
                                    setRating(() => key);
                                 }}
                              >
                                 {i}
                              </span>
                           )
                        )}
                     </div>
                     <p className="text-right text-[#A80000] font-semibold text-[10px] mt-4 opacity-80">Delete video</p>
                  </div>
               </div>
               <div className="rounded-lg overflow-hidden aspect-video scale-[1.2] h-full">
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" height="100%" width="100%" />;
               </div>
            </div>
         </Card>
         <Card>
            <h2 className="text-2xl font-semibold mb-10 max-w-[400px]">
               Why do you want to be part of this program and what would you like to gain?
            </h2>
            <p className="text-[10px] text-[#BABABA]">Requested on 12 Mar 2023 | Deadline: 12 June 2023</p>
         </Card>
      </div>
   );
};

export default VideoPage;
