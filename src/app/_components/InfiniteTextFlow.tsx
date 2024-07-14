"use client";
import React, { useEffect } from "react";
import createLoopingText from "../_utils/loopingTextAnimation";

export default function InfiniteTextFlow() {
  useEffect(() => {
    const container = document.querySelector(".loop-container");
    if(container instanceof HTMLElement) {
      createLoopingText(container);
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="loop-container">
        <div className="item">Delicious Recipes Await You!&nbsp;</div>
        <div className="item">Discover, Cook, Enjoy!&nbsp;</div>
      </div>
    </section>
  );
}
