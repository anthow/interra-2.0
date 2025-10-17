import React from "react";
import { Link } from "gatsby";

const ActionButtons = () => (
  <>
    <Link to="/campagne-2025">
      <li
        className=" text-white bg-vert-interra font-black
      p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
      hover:bg-white border hover:border-vert-interra"
      >
        Soutenez-nous !
      </li>
    </Link>
    <Link to="/agir-avec-nous/#volontaire">
      <li
        className=" text-white bg-orange-interra text-center mb-2 md:mb-0 font-black  
    p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra 
    hover:bg-white border hover:border-orange-interra "
      >
        Devenir Volontaire
      </li>
    </Link>
    <Link to="/une-histoire-dans-l-assiette">
      <li
        className=" text-white bg-orange-interra font-black
      p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-orange-interra 
      hover:bg-white border hover:border-orange-interra text-sm md:text-lg whitespace-nowrap"
      >
        Une histoire dans l'assiette
      </li>
    </Link>
  </>
);

export default ActionButtons;
