import React from "react";
import { useUser } from "@clerk/clerk-react";

const JobseekerHome = () => {
  const { user } = useUser();

  return <h1 className="font-extrabold">Welcome to user page!!</h1>;
};

export default JobseekerHome;
