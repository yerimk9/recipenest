export function wrapForward(trigger: any, iteration: number) {
  iteration++;
  trigger.wrapping = true;
  trigger.scroll(trigger.start + 1);
}

export function wrapBackward(trigger: any, iteration: number) {
  iteration--;
  if (iteration < 0) {
    iteration = 9;
  }
  trigger.wrapping = true;
  trigger.scroll(trigger.end - 1);
}
