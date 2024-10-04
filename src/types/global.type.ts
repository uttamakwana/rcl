import { colorVariants } from "@/constants/global.constant";

// Severity Actions
export type TCSSSeverity = "danger" | "success" | "warning" | "info";

// Color Variants
export type TCSSColorVariant = (typeof colorVariants)[number];
