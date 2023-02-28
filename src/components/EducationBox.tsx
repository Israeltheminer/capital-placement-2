import { Card } from '.';

const EducationBox = () => {
   return (
      <Card heading="Education">
         <table className="table-fixed">
            <tbody>
               {[
                  {
                     duration: 'MM/YYYY - MM/YYYY',
                     title: 'MA History and Political Science',
                     institution: 'HBS- Harvard University, United State',
                  },
                  {
                     duration: 'MM/YYYY - MM/YYYY',
                     title: 'MA History',
                     institution: 'King’s College London, United Kingdom',
                  },
               ].map(({ title, institution, duration }, index) => (
                  <tr key={index}>
                     <td className="w-24 text-sm text-[#A5A5A5] py-[10px] tracking-wider">{duration}</td>
                     <td className="py-[10px] pl-6">
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-sm font-light">{institution}</p>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Card>
   );
};

export default EducationBox;
