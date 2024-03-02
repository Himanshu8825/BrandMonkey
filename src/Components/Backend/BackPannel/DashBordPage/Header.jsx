import React from "react";
import { Notification, Profile, Setting } from "../../../Icon";

const Header = () => {
  return (
    <div>
      <div className="flex mt-3 mr-8">
        <div className="m-2 flex gap-3">
          <div className="gradient rounded-2xl" id="profile">
            <div className="mt-1 ml-2">
              <Profile />
            </div>
            <p className="text-white" id="ceo-owner">
              Sourav Kumar
            </p>
            <div className="text-white" id="ceo">
              (CEO)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
