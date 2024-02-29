import React from "react";
import { NotesAdd, NotesIcon } from "../../../Icon";

const Notes = () => {
  return (
    <div className="gradient p-1 w-[240px] h-[160px] rounded-xl BR">
      <div className="">
        <NotesIcon />
      </div>
      <div className="background mx-auto   rounded-xl" id="notes">
        <div className="text-sm m-1">
          <div className="">
            <p>1. Meeting with Client A - 9:00 AM to..</p>
            <p>2. Follow-up call with Prospect</p>
            <p>3. B - 11:30 AM to.. Proposal preparation for Client C</p>
          </div>
        </div>
      </div>
      <div className=" mt-2 md:mt-0">
        <NotesAdd />
      </div>
    </div>
  );
};

export default Notes;
