import { Card } from '.';

const GeneralInfoBox = () => {
   return (
      <Card>
         <h2 className="text-2xl font-bold tracking-wide">Aaliyah</h2>
         <h2 className="text-2xl font-bold">Samdi</h2>
         <table className="table-fixed mt-3">
            <tbody>
               {[
                  { title: 'Current Location', detail: 'Riyadh' },
                  { title: 'Phone', detail: '626-398-6547' },
                  { title: 'Email', detail: 'aaliyah.samdi@gmail.com' },
               ].map(({ title, detail }, index) => (
                  <tr key={index}>
                     <td className="w-48 font-semibold text-sm text-[#A5A5A5] py-2 tracking-wider">{title}</td>
                     <td className="text-sm">{detail}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Card>
   );
};

export default GeneralInfoBox;
