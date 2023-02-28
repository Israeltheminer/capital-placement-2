import { Card } from '.';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Button from '@mui/material/Button';
import { mainButtonStyle } from './CandidateInfo';

const ResumeBox = () => {
   const [numPages, setNumPages] = useState(null);
   const [pageNumber] = useState(1);

   function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
      setNumPages(numPages);
   }
   return (
      <Card heading="Resume" divideHeading={false}>
         <Button
            variant="text"
            sx={{
               ...mainButtonStyle,
               top: '-42px',
               right: '0',
               fontWeight: '500',
               color: '#EB1313',
            }}
         >
            Download
         </Button>
         <div className="resume-container">
            <Document file="./israel.pdf" onLoadSuccess={onDocumentLoadSuccess}>
               <Page pageNumber={pageNumber} />
            </Document>
         </div>
      </Card>
   );
};

export default ResumeBox;
