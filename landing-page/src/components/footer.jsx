import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="flex flex-col md:flex-row ml-4 mt-4">
          <img src="/img/business.png" className="w-6 h-6 mt-2" alt="" />
          <h1 className="text-4xl font-bold text-slate-400">Showroom</h1>
          <div className="text-slate-400 text-xs ml-4 mt-6 md:ml-8">
            press@showroom.store
          </div>
        </div>

        <div className="flex justify-start mt-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 mx-2">
            <InstagramIcon className="text-white" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 mx-2">
            <TwitterIcon className="text-white" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 mx-2">
            <LinkedInIcon className="text-white" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 mx-2">
            <AudiotrackIcon className="text-white" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-400 mx-2">
            <YouTubeIcon className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
