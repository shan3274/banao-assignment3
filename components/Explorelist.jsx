import React from "react";

const Explorelist = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="absolute top-[5em] right-[36%] flex flex-col bg-white z-50">
      <button className="w-[220px] h-[42px] border">People - Community</button>
      <button className="w-[220px] h-[42px] border">People - Community</button>
      <button className="w-[220px] h-[42px] border">People - Community</button>
      <button className="w-[220px] h-[42px] border">People - Community</button>
      <button className="w-[220px] h-[42px] border">People - Community</button>
    </div>
  );
};

export default Explorelist;
