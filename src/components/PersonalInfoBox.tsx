import { Card } from '.';

const PersonalInfoBox = () => {
   return (
      <Card heading="Personal Information">
         <table className="table-fixed mt-1">
            <tbody>
               {[
                  { title: 'Nationality', detail: 'Saudi Arabia' },
                  { title: 'National ID ', detail: '235769708967' },
                  { title: 'Gender', detail: 'Female' },
               ].map(({ title, detail }, index) => (
                  <tr key={index}>
                     <td className="w-48 font-semibold text-sm text-[#A5A5A5] py-[10px] tracking-wider">{title}</td>
                     <td className="text-sm">{detail}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Card>
   );
};

export default PersonalInfoBox;
