import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { useSelector } from "react-redux";
//import { AuthContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import User from "./User";

function PrivateRoute({ children }) {
    const isAuth=useSelector((store)=>store.auth.isAuth)

  if (!isAuth) {
    console.log('not authed');
    return (      <Box cursor={"pointer"} > {isAuth ? <User/>:<SignUp/>} </Box>
    )

  }
  return children;
}

export default PrivateRoute;
