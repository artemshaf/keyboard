import { componentVariant } from "@interfaces";

export type TAccountVariants = "text" | "result" | "info";

export const accountVariants: componentVariant<TAccountVariants>[] = [
  {
    text: "ACCOUNT_PAGE.variantInfo",
    variantState: "info",
  },
  {
    text: "ACCOUNT_PAGE.variantText",
    variantState: "text",
  },
  {
    text: "ACCOUNT_PAGE.variantResult",
    variantState: "result",
  },
];
