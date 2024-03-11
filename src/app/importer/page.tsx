import React from 'react';
import { CSVBoxButton } from '@csvbox/react';


type Data = {
  row_success: number;
  // Add other properties as needed
};

const Imports: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CSV Importer</h1>
      {/* <CSVBoxButton
        licenseKey="YOUR_LICENSE_KEY_HERE"
        user={{
          user_id: "default123"
        }}
        onImport={(result: boolean, data: Data) => {
          if(result){
            console.log("success");
            console.log(data.row_success + " rows uploaded");
            //custom code
          }else{
            console.log("fail");
            //custom code
          }
        }} 
        render={(launch: () => void, isLoading: boolean) => {
          return <button disabled={isLoading} onClick={launch}>Upload file</button>;
        }}
      >
        Import
      </CSVBoxButton> */}
    </main>
  );
}

export default Imports;

