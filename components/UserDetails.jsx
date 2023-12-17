import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import ReactImageFallback from "react-image-fallback";
import { IoCaretBack } from "react-icons/io5";
import fallback from "../public/fallback.png";

const UserDetails = ({ props, onBack }) => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState([]);
  const [id, setId] = useState([]);
  useEffect(() => {
    setUserName(props?.profile?.username);
    setAvatar(props?.avatar);
    setBio(props?.Bio);
    setFirstName(props?.profile?.firstName);
    setLastName(props?.profile?.lastName);
    setJobTitle(props?.jobTitle);
    setEmail(props?.profile?.email);
    setId(props?.id);
    setUrl(() => avatar.split("_"));
  }, [props]);

  let imgUlr = `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${id}.jpg`;
  console.log("id " + id);
  console.log("avatar " + avatar);
  return (
    <>
      {props ? (
        <div
          className={`lg:w-[50%] w-full  h-full flex flex-col items-center gap-5 justify-around py-10 duration-700 relative"}`}
        >
          <IoCaretBack
            className="absolute top-20 text-[30px] left-2 lg:hidden text-[#8064A2]"
            onClick={onBack}
          />
          <h1 className="lg:w-[70%] w-[90%]  text-center text-[35px] font-[700] h-[3.5rem] bg-[#8064A2] rounded-t-[8px] text-white">
            User Deatils
          </h1>

          {imgUlr ? (
            <ReactImageFallback
              src={avatar}
              fallbackImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1656px-User_icon-cp.svg.png"
              initialImage={`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${id}.jpg`}
              alt="avatar"
              className="w-[200px] h-[200px] rounded-full"
            />
          ) : (
            <FadeLoader color="#36d7b7" />
          )}

          {userName == undefined ? (
            <h2 className="text-[25px] text-red-500 font-[700]">Username</h2>
          ) : (
            <h2 className="text-[25px] text-red-500 font-[700]">{userName}</h2>
          )}
          {bio != undefined ? (
            <p className="lg:w-[60%] w-[80%] bg-[#8064A2] min-h-[150px] rounded-md text-center p-10 text-white duration-300 hover:scale-[1.03]">
              {bio}{" "}
            </p>
          ) : (
            <p className="lg:w-[60%] w-[80%] bg-[#8064A2] min-h-[150px] rounded-md text-center p-10 text-white duration-300 hover:scale-[1.03]">
              Bio data
            </p>
          )}
          <div className="flex flex-col gap-2 lg:w-[60%] w-[80%]">
            <h1 className="text-[20px] font-[600] text-red-600">Full Name</h1>
            {firstName != undefined ? (
              <p className="w-full py-2 bg-[#8064A2] text-white pl-5 rounded-md border-[1px] border-blue-300 duration-300 hover:scale-[1.03]">
                {firstName} {lastName}
              </p>
            ) : (
              <p>full name will be here</p>
            )}
          </div>
          <div className="flex flex-col gap-2 lg:w-[60%] w-[80%]">
            <h1 className="text-[20px] font-[600] text-red-600">Job Title</h1>
            {jobTitle != undefined ? (
              <p className="w-full py-2 bg-[#8064A2] text-white pl-5 rounded-md border-[1px] border-blue-300 duration-300 hover:scale-[1.03]">
                {jobTitle}
              </p>
            ) : (
              <p>title</p>
            )}
          </div>
          <div className="flex flex-col gap-2 lg:w-[60%] w-[80%]">
            <h1 className="text-[20px] font-[600] text-red-600">Email</h1>
            {email != undefined ? (
              <p className="w-full py-2 bg-[#8064A2] text-white pl-5 rounded-md border-[1px] border-blue-300 duration-300 hover:scale-[1.03]">
                {email}
              </p>
            ) : (
              <p>Email</p>
            )}
          </div>
        </div>
      ) : (
        <div className="w-[50%] h-full">
          <FadeLoader />
        </div>
      )}
    </>
  );
};

export default UserDetails;
