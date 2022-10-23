import React from "react";
import { FaInstagram, FaFacebook, FaSnapchat, FaTiktok } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <>
      <a href="https://facebook.com" className="me-3">
        <FaInstagram />
      </a>
      <a href="https://facebook.com" className="me-3">
        <FaFacebook />
      </a>
      <a href="https://facebook.com" className="me-3">
        <FaSnapchat />
      </a>
      <a href="https://facebook.com">
        <FaTiktok />
      </a>
    </>
  );
}
