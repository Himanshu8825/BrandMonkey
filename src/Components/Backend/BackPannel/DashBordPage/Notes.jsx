import React from "react";
import { NotesAdd, NotesIcon } from "../../../Icon";

const Notes = () => {
  return (
    <div className="gradient w-[335px]  rounded-xl BR  mt-28 py-1 ">
      <span className="px-3">
        <NotesIcon />
      </span>
      <div className="background    rounded-xl mx-3 mt-3">
        <div className="text-sm  px-2 py-1">
          <p>1. Meeting with Client A - 9:00 AM to..</p>
          <p>2. Follow-up call with Prospect</p>
          <p>3. B - 11:30 AM to.. Proposal preparation</p>
        </div>
      </div>
      <span className=" mt-2 md:mt-0">
        <NotesAdd />
      </span>
    </div>
  );
};

export default Notes;
