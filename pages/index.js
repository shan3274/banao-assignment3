import Header from "@/components/Header";
import UserList from "@/components/UserList";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full flex justify-center duration-700">
        <UserList />
      </div>
    </>
  );
};

export default index;
