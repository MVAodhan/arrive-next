"use client";

import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    if ("geolocation" in navigator) {
      console.log("geolocation is available");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("geolocation IS NOT available");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Arrive-next</h1>
    </main>
  );
}
