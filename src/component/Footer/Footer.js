import "./Footer.css";
import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="px-2 text-center">
      <div className="text-center">
        <Logo classes={" justify-content-center"} />
      </div>
      <div className="py-5">
        <span>Address:</span> 2022 Vernon Street, San Diego
        <br />‍<span>Phone no:</span> + (760) 707-4815 | <span>Email:</span>{" "}
        info@noize.com
      </div>
      <div className="pb-5">
        <SocialIcon />
      </div>
      <div>
        @IbrahimQazi. All Rights Reserved 2022
        <br />
        Designed & Developed By imtisalanwar.com
      </div>
    </footer>
  );
}
