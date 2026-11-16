import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const profiles = [
  { key: "twitter", href: socialprofils.twitter, label: "Twitter", icon: <FaTwitter /> },
  { key: "github", href: socialprofils.github, label: "Github", icon: <FaGithub /> },
  { key: "facebook", href: socialprofils.facebook, label: "Facebook", icon: <FaFacebookF /> },
  { key: "linkedin", href: socialprofils.linkedin, label: "Linkedin", icon: <FaLinkedin /> },
  { key: "youtube", href: socialprofils.youtube, label: "Youtube", icon: <FaYoutube /> },
  { key: "twitch", href: socialprofils.twitch, label: "Twitch", icon: <FaTwitch /> },
];

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {profiles.map((profile) =>
          profile.href ? (
            <li key={profile.key}>
              <a href={profile.href} aria-label={profile.label}>
                {profile.icon}
              </a>
            </li>
          ) : null
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
