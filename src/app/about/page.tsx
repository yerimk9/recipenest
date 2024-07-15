"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import animateFadeIn from "../_utils/animations";

export default function AboutPage() {
  animateFadeIn();
  return (
    <div className="about-container">
      <div className="aboutImg-container">
        <Image src={"/pngs/aboutImg.jpg"} alt="aboutImg" fill />
      </div>
      <div className="aboutDesc-container">
        <div className="homeBtn">
          <Link href={"/"}>CLOSE</Link>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image
            src={"/svgs/logo.svg"}
            alt="logoImg"
            width={100}
            height={100}
          />
          <h3>서른다섯의 레시피</h3>
          <div className="lg:text-lg w-[70%] flex flex-col gap-6 leading-loose">
            <div>
              환영합니다! 서른다섯의 레시피는 여러분이 집에서 쉽게 따라할 수
              있는 건강하고 맛있는 요리 레시피를 제공합니다. 우리의 목표는
              가족과 친구들에게 건강한 식사를 제공하면서, 함께 요리의 즐거움을
              나눌 수 있도록 돕는 것입니다.
            </div>
            <div>
              저희 웹페이지는 다양한 요리법을 통해 여러분이 더욱 건강하고 균형
              잡힌 식생활을 유지할 수 있도록 돕고자 합니다. 신선한 재료와 간단한
              조리법을 사용하여 누구나 쉽게 따라할 수 있는 요리 레시피를
              소개합니다.
            </div>
          </div>
          <Link
            className="sources"
            href={"https://www.data.go.kr/data/15060073/openapi.do"}
          >
            식품의약품안전처_조리식품의 레시피 DB
          </Link>
        </div>
      </div>
    </div>
  );
}
