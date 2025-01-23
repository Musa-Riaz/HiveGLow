import React from "react";
import TeamCards from "./TeamCards";

const TeamMembers = [
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image:"/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image:"/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image:"/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image:"/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
  {
    name: "Musa Riaz",
    role: "Full Stack Developer",
    bio: "I am a full stack developer with experience in React, Node.js, Express, and MongoDB.",
    image:"/musariaz.JPG",
    social: {
      linkedin: "asdasd",
      github: "asdas",
    },
  },
];

const TeamOverview = () => {
  return (
    <div className="py-32 border flex justify-center  border-black bg-gray-100 dark:bg-darkmode ">
    <div className="container  px-4 md:px-6">
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Meet Our Team</h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">The talented people behind our success</p>
      </div>

      <div className="flex gap-4  mx-10  justify-center ">
        {TeamMembers.map((member, index) => (
          <TeamCards key={index} member={member} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default TeamOverview;
