import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS animations with a duration
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
