'use client';
import { CSVBoxButton } from '@csvbox/react'
export default function Importer() {
  const licencseKey = process.env.CSV_BOX_LICENSE_KEY || ''
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>CSV Importer</h1> */}
      <div className="mt-6 flex max-w-md gap-x-4">
        <div className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">

          <CSVBoxButton
            licenseKey={licencseKey}
            user={{
              user_id: process.env.CSV_BOX_USER_ID
            }}

            onImport={(result: boolean, data: any) => {
              if (result) {
                console.log("success");
                console.log(data.row_success + " rows uploaded");
                //custom code
              } else {
                console.log("fail");
                //custom code
              }
            }}
            render={(launch: any, isLoading: boolean) => {
              return <button disabled={isLoading} onClick={launch}>Upload file</button>;
            }}
          >
            Import
          </CSVBoxButton>

        </div>
      </div>


    </main>
  );
}
