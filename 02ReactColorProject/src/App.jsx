import { useState } from "react";

function App() {
  const [color, setColor] = useState("Skyblue");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg"></div>
      </div>
    </div>
  );
}

export default App;
