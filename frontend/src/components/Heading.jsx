import React from "react";

const Heading = () => {
  return (
    <div className="max-w-3xl  text-white  flex flex-col mt-20 gap-20  items-center dark:text-white space-y-4 mx-auto  ">
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold  min-w-max p-2 ">
        Welcome To HiveGlow
      </h1>
      <h3 className="text-lg text-center sm:text-xl md:text-2xl font-light">
        We are a team of developers who are passionate about creating
        high-quality software.
      </h3>
    </div>
  );
};

export default Heading;
