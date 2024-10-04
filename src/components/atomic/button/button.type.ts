import type { TCSSColorVariant } from "@/types/global.type";
import type { ComponentPropsWithoutRef } from "react";
// Button Actions
export type TCSSButtonAction = "primary" | "secondary" | "tertiary";

// Button Variants
export type TCSSButtonVariant = TCSSColorVariant;

export type TButtonProps = {
  variant?: TCSSButtonVariant;
  action?: TCSSButtonAction;
} & ComponentPropsWithoutRef<"button">;
