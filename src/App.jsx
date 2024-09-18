import { CssBaseline, GlobalStyles } from "@mui/material";
import { Route, RouterProvider, Routes } from "react-router-dom";
import {router} from "./Routes";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement } from "chart.js";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import Request from "./Pages/Request";



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, BarElement);

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none"
    }
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router={router} />
      
      {/* <div className="app">
        
        <Routes>
           <Route path="/Request" element={<Request/>}/>
        </Routes>
        
      </div> */}
    </>
  );
}

export default App;