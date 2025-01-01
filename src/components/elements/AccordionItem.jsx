import React, { useState } from "react";
import { arrow, tick } from "../../assets/svgs";

function AccordionItem({ question = "", answer = "" }) {
  const [open, setOpen] = useState(false);

  const dummyQuestion = "Dummy Question for Testing";
  const dummyAnswer = "Dummy Answer for Testing";
  return (
    <div className="w-full accordion-item border-b">
      <div className="py-4 w-full flex justify-between items-center cursor-pointer"onClick={() => setOpen(!open)}  >
        <div className="flex gap-2 items-center   ">
          <img src={tick} className="h-5 sm:h-8" alt="" />
          <h4 className="text-slate-800 text-lg font-medium sm:text-xl">{!question ? dummyQuestion : question}</h4>
        </div>
        <img src={arrow} className={`${open?'rotate-180':''} h-8 transition-all duration-300`} alt="" />
    </div>
          
        {open && <p className=" bg-gray-200 py-3 px-4 w-full text-lg">{!answer ? dummyAnswer : answer}</p>}

    </div>
  );
}

export default AccordionItem;
