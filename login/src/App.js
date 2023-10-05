import "./App.css";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Update from './Pages/Update'
import UserPage from "./Pages/UserPage";
function App() {

  const user = useSelector((state) => state.user);
  const accessTokens = user?.userdata?.[0]?.accessToken;
  console.log("access Token",accessTokens);
      
  const router = createBrowserRouter([
    {
      path: "/",
      element: accessTokens !== undefined ? <UserPage/> : <LoginPage/>
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: '/update',
      element: accessTokens ? <Update/> : <LoginPage/>
    },
    {
      path: "/userpage",
       element:accessTokens ? <UserPage/> :<LoginPage/>  
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
