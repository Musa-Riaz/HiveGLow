import React from "react";
import TeamCards from "./TeamCards";

const TeamMembers = [
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image: "/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image: "/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image: "/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image: "/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image: "/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
];

const TeamOverview = () => {
  return (
    <div className="py-20 flex justify-center bg-background text-text">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Meet Our Team</h2>
          <p className="mt-4   md:text-xl">The talented people behind our success</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-10 justify-center ">
          {TeamMembers.map((member, index) => (
            <TeamCards key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;
