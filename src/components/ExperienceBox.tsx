import { Card } from '.';

const ExperienceBox = () => {
   return (
      <Card heading="Experience">
         <table className="table-auto">
            <tbody className="space-y-4">
               {[
                  {
                     duration: '09/2022 – Current',
                     title: 'Business Development',
                     institution: 'Saudi Corp, UAE',
                  },
                  {
                     duration: '08/2020 – 08/2022 ',
                     title: 'Business Development',
                     institution: 'Saudi Corp, UAE',
                  },
               ].map(({ title, institution, duration }, index) => (
                  <tr key={index}>
                     <td className="w-24 text-sm text-[#A5A5A5] py-[10px] tracking-wider">{duration}</td>
                     <td className="py-[10px] pl-6">
                        <p className="text-sm font-bold">{title},</p>
                        <p className="text-sm font-light">{institution}</p>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Card>
   );
};

export default ExperienceBox;
