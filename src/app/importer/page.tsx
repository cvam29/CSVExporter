'use client';
import { CSVBoxButton } from '@csvbox/react'
import { useState } from 'react';
export default function Importer() {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [responseClass, setResponseClass] = useState<string>('text-green-600');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>CSV Importer</h1> */}
      <div className="mt-6 flex max-w-md gap-x-4">

          <CSVBoxButton
            licenseKey='10fnhBr1EiUkX7bAJBYq54fbLA04Xo'
            user={{
              user_id: process.env.CSV_BOX_USER_ID
            }}
            options={{
              max_rows: 5000,
            }}
            onImport={(result: boolean, data: any) => {
              if (result) {
                console.log("success");
                setResponseClass('text-green-600');
                setApiResponse(data.row_success + " rows uploaded");
                console.log(data.row_success + " rows uploaded");
                //custom code
              } else {
                setResponseClass('text-red-600');
                setApiResponse(data.row_error + " rows failed to upload");
                console.log("fail");
                //custom code
              }
            }}
            render={(launch: any, isLoading: boolean) => {
              return <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" disabled={isLoading} onClick={launch}>Upload Product CSV</button>;
            }}
          >
            Import
          </CSVBoxButton>

      </div>
      {apiResponse && <p className={responseClass}>{apiResponse}</p>}
    </main>
  );
}
