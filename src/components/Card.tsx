import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
   children?: React.ReactNode;
   heading?: string;
   divideHeading?: boolean;
}

const BasicCard = React.forwardRef((props: Props, ref) => {
   return (
      <div className="card-shadow overflow-hidden rounded-2xl relative">
         <Card
            sx={{
               minWidth: '400px',
               boxShadow: 'none',
               minHeight: '110px',
               WebkitTapHighlightColor: 'none',
            }}
         >
            {props.heading ? (
               <div
                  className="h-[58px] px-8 text-left flex items-center border-b"
                  style={{ borderColor: props.divideHeading ? '#E7E7E7' : 'transparent' }}
               >
                  <Typography
                     sx={{
                        fontWeight: '600',
                        fontSize: '15px',
                        marginTop: '6px',
                        letterSpacing: '0.3px',
                     }}
                  >
                     {props.heading}
                  </Typography>
               </div>
            ) : (
               <></>
            )}

            <CardContent sx={{ paddingX: '34px', paddingY: '24px', position: 'relative' }}>
               {props.children}
            </CardContent>
         </Card>
      </div>
   );
});
BasicCard.defaultProps = {
   divideHeading: true,
};

export default BasicCard;
