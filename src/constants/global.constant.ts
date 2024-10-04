export const standardColors = [
  "black",
  "white",
  "grey",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "cyan",
  "violet",
  "magenta",
  "rose",
  "azure",
] as const;

export const functionalColors = [
  "danger",
  "warning",
  "success",
  "info",
] as const;

export const themeColors = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "chartreuse-green",
  "spring-green",
] as const;

export const colorVariants = [
  ...themeColors,
  ...functionalColors,
  ...standardColors,
] as const;
