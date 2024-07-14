import InfiniteTextFlow from "@/app/_components/InfiniteTextFlow";
import RecipeContainer from "@/app/_components/RecipeContainer";
import getRecipe from "@/app/_services/getRecipe";
import Image from "next/image";
import React from "react";

async function RecipeMenu({ params }: any) {
  const { COOKRCP01 } = await getRecipe(params.name);
  const recipe = COOKRCP01["row"];

  return (
    <div className="recopeMenu-contianer">
      <InfiniteTextFlow />
      <div className="menuDesc-container">
        <div className="menu-desc">
          <div className="circleTag">레시피</div>
          <div className="text-desc">
          <h3>{recipe[0]["RCP_NM"]}</h3>
          <div>{recipe[0]["RCP_NA_TIP"]}</div>
          <div>{recipe[0]["RCP_PARTS_DTLS"]}</div>
          </div>
          <div className="menu-kind-contianer">
            <div className="circle-whiteTag">요리 종류 <span className="mx-1">|</span> {recipe[0]["RCP_PAT2"]}</div>
            <div className="circle-whiteTag">칼로리 <span className="mx-1">|</span> {recipe[0]["INFO_ENG"]}kcal</div>
          </div>
        </div>
        <Image
          src={recipe[0]["ATT_FILE_NO_MK"]}
          alt="img"
          width={460}
          height={600}
        />
      </div>

<div className="w-[90%] flex flex-col items-center mt-24 mx-auto text-xl font-bold">
  <div className="mb-2 flex gap-2 text-[#133E35]">한 단계씩 따라해 보세요 <Image src={"/svgs/smile.svg"} alt="smileImg" width={24} height={24}/></div>
  <div className="border-[1px] border-[#133E35] opacity-30 w-[90%] my-0 mx-auto"></div>
</div>
      <RecipeContainer recipe={recipe} />
    </div>
  );
}

export default RecipeMenu;
