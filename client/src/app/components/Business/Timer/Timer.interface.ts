import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITimerInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  duration?: number;
  pause?: boolean;
}
