import gsap from "gsap";

export default function animateFadeIn() {
  let tl = gsap.timeline();
  tl.to(document.querySelector("body"), { opacity: 0, duration: 0 }).to(
    document.querySelector("body"),
    {
      opacity: 1,
      duration: 1,
    }
  );
}
