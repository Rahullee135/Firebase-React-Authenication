import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

export default function Home() {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login")
    toast('Logged Out successfully');
    console.log("logged out successfully")
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
      toast('Logged In successfully');
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="Home-Page">Home Page</div>
      <div>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </>
  );
}
