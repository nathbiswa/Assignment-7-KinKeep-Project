import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "./Home/HomePage";
import TimeLInePage from "../Pages/TimeLinePage/TimeLInePage";
import StatsPage from "../Pages/StatsPage/StatsPage";
import FriemdDetailesPage from "./Home/FriendDetailesPage/FriemdDetailesPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
       children: [
        {
            index: true,
            element: <HomePage/>,
        },
          {
            path: "/:id",
            element: <FriemdDetailesPage/>,
        },
        {
            path: "/timeline",
            element: <TimeLInePage/>
        },
        {
            path: "/stats",
            element: <StatsPage/>
        }
       ]
    }
])