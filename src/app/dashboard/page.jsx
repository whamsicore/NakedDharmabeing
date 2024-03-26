'use client'
// Importing React from react package
import React from 'react';

// Defining and exporting the Page component
import { useEffect, useState } from 'react';
// import { fetch } from 'react-fetch';

export default function Page() {
  const [siteMap, setSiteMap] = useState({});

  useEffect(() => {
    (async () => {
      if (Object.keys(siteMap).length === 0) {
        try {
          const response = await fetch('/api/get-site-map'); 
          const data = await response.json();
          console.log('Data:', data);
          setSiteMap(data);
        } catch (error) {
        console.error('Error fetching site map:', error);
        }
      }
    })();
  }, [siteMap]);

  return (
    <div>
      <h1>Site Map</h1>
      {siteMap ? (
        <pre>{JSON.stringify(siteMap, null, 2)}</pre>
      ) : (
        <p>Loading site map...</p>
      )}
    </div>
  );
}