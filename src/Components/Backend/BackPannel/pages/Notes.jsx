import React from "react";
import { NotesAdd, NotesIcon } from "../../../Icon";

const Notes = () => {
  return (
    <div className="gradient p-1 w-full md:w-[328px] h-[236px] rounded-xl border-2 border-bm-primary">
      <div className="flex justify-center items-center">
        <NotesIcon />
      </div>
      <div className="background w-full md:w-[250px] h-[150px] mx-auto rounded-xl">
        <div className="text-sm m-2">
          <p>1.Meeting with Client A - 9:00 AM to..</p>
          <p>2. Follow-up call with Prospect</p>
          <p>3.B - 11:30 AM to.. Proposal preparation for Client C</p>
        </div>
      </div>
      <div className="flex justify-center mt-2 md:mt-0">
        <NotesAdd />
      </div>
    </div>
  );
};

export default Notes;
