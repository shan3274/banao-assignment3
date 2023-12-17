import React, { useEffect, useState } from "react";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import UserDetails from "./UserDetails";
import ReactImageFallback from "react-image-fallback";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState(null);
  const [next, setNext] = useState(false);

  const FetchUsers = () => {
    axios("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        setUsers(() => res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return (
    <>
      {loader ? (
        <div
          className={`w-[50%] h-[100vh] flex items-center justify-center duration-300 `}
        >
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <div
            className={`flex lg:w-[70%] w-[80%] h-full  flex-col gap-3 items-center lg:pt-10 duration-700 ${
              next && "hidden lg:flex"
            }`}
          >
            <div className="lg:w-[50%] w-[100%] h-[3.5rem] bg-[#8064A2] rounded-t-[8px] text-white flex items-center justify-center text-[20px] font-[700]">
              Registered Users
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col gap-2 overflow-y-scroll lg:max-h-[550px] max-h-[100vh] rounded-b-[8px]">
              {users?.map((user, key) => {
                return (
                  <div
                    className=" w-full  flex pl-5 flex-col justify-start bg-blue-100 hover:bg-blue-300 cursor-pointer duration-300"
                    onClick={() => {
                      setUserData(user);
                      setNext(true);
                    }}
                  >
                    <div className="h-[3rem] flex items-center justify-start gap-5 relative">
                      {" "}
                      <ReactImageFallback
                        src={user?.avatar}
                        fallbackImage="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg"
                        initialImage={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${user?.id}.jpg`}
                        alt="avatar"
                        className="w-[30px] h-[30px] rounded-full"
                      />
                      <p>{user?.profile?.username}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {next && (
            <UserDetails props={userData} onBack={() => setNext(false)} />
          )}
        </>
      )}
    </>
  );
};

export default UserList;
