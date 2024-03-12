'use client';  
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
export default function Exports() {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [responseClass, setResponseClass] = useState<string>('text-green-600');
  const apiUrl=process.env.API_URL  || ''

  const fetchData = useCallback(async () => {
     
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          
        }
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
        setResponseClass('text-red-600');
      }
      const data = await response.text();
      setApiResponse(data);
      console.log(data);
    } 
    catch (error) 
    {
      
      console.error(error);
      setResponseClass('text-red-600');
      setApiResponse('An error occurred during export.');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-80 min-w-4 flex-auto rounded-md  border-2 border-slate-900 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          
        />
        <button
          type="submit"
          onClick={fetchData}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Export Products
        </button>
    
      </div>
     {apiResponse && <p className={responseClass}>{apiResponse}</p>}
    </main>
  );
}
