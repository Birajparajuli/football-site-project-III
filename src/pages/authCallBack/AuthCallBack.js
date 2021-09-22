import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const AuthCallBack = () => {
  const [auth, setAuth] = useState();
  const location = useLocation;

  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    console.log(search);
    axios({
      method: "GET",
      url: `https://projectiii.vercel.app/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth);
  }, [location]);

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  );
};

export default AuthCallBack;
