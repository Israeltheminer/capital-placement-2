import { EducationBox, ExperienceBox, GeneralInfoBox, PersonalInfoBox, ResumeBox } from '.';

const ProfilePage = () => {
   return (
      <div className="min-w-full p-2 inline-block">
         <div className="grid grid-cols-2 gap-5 mt-10">
            <GeneralInfoBox />
            <PersonalInfoBox />
            <EducationBox />
            <ExperienceBox />
         </div>
         <div className="mt-9">
            <ResumeBox />
         </div>
      </div>
   );
};

export default ProfilePage;
