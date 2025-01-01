import React from "react";

function WhyUsItem({ icon, title, para, className = "" }) {
  const dummyImage =
    "https://i.pinimg.com/1200x/d4/89/43/d48943357b651feaf9133f4856ff33a0.jpg";
  const dummyTitle = "Dummy Title";
  const dummyPara =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, felis vel mattis consectetur, velit neque sagittis lectus, vel tristique neque velit vitae lectus.";

  return (
    <div className={`${className} why-us-item w-full sm:w-[32%] h-fit  sm:h-[330px] px-4 py-2 pt-4 border-t-2 border-l-2 border-r-8 border-b-8 rounded-3xl border-black`}>
      <img
        src={!icon ? dummyImage : icon}
        className="h-10 rounded-full object-cover object-center"
        alt=""
      />
      <h3 className="text-2xl my-2">{!title ? dummyTitle : title}</h3>
      <p className="text-base text-gray-700">{!para ? dummyPara : para}</p>
    </div>
  );
}

export default WhyUsItem;
