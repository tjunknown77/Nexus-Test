import { useEffect, useState } from "react";

export default function NexusLanding() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage("/background.jpg");
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10">NEXUS</h1>
      <div className="space-y-6 w-full max-w-xs">
        <button className="w-full py-3 text-lg bg-gray-800 hover:bg-gray-600 border border-white rounded-xl">Books</button>
        <button className="w-full py-3 text-lg bg-gray-800 hover:bg-gray-600 border border-white rounded-xl">Character Profiles</button>
        <button className="w-full py-3 text-lg bg-gray-800 hover:bg-gray-600 border border-white rounded-xl">Maps</button>
      </div>
    </div>
  );
}