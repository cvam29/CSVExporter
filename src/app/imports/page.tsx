import { CSVBoxButton } from "@csvbox/react";

export default function Imports() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CSv Importer</h1>
      <CSVBoxButton
        licenseKey="YOUR_LICENSE_KEY_HERE"
        user={{
          user_id: "default123"
        }}
        onImport={(result, data) => {
          if (result) {
            console.log("success");
            console.log(data.row_success + " rows uploaded");
            //custom code
          } else {
            console.log("fail");
            //custom code
          }
        }}
        render={(launch, isLoading) => {
          return <button disabled={isLoading} onClick={launch}>Upload file</button>;
        }}
      >
        Import
      </CSVBoxButton>
    </main>
  );
}
