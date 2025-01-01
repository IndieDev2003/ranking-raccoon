import React from "react";

function ColdEmailStep({ stepTitle = "", stepdescription = "", icon }) {
  const dummyIcon =
    "https://i.pinimg.com/1200x/92/6b/dc/926bdc4f3fb6e1395b1de3fb8dcb5ef4.jpg";

  const dummyDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eiustenetur hic necessitatibus. Qui sit error necessitatibus optio essetempore illo neque quisquam? Praesentium quo, et molestias cumaccusamus adipisci tempore consectetur debitis sed illum, perferendisaccusantium qui est recusandae!";

  return (
    <div className="cold-email-step flex flex-col sm:flex-row items-start gap-1 sm:gap-3 ">
      <img
        src={!icon ? dummyIcon : icon}
        className="h-10 sm:h-14 rounded-full mb-1 sm:mb-0"
        alt=""
      />
      <div className="flex flex-col">
        <h2 className="text-2xl text-gray-800">
          {!stepTitle ? "Dummy Title" : stepTitle}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {!stepdescription ? dummyDescription : stepdescription}
        </p>
      </div>
    </div>
  );
}

export default ColdEmailStep;
