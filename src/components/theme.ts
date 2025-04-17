import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const neonPulse = {
  "0%, 100%": {
    boxShadow: "0 0 5px 2px #ff0044, 0 0 10px 5px #ff0044",
  },
  "50%": {
    boxShadow: "0 0 10px 5px #ff0044, 0 0 15px 10px #ff0044",
  },
};

const customConfig = defineConfig({
  globalCss: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: { display: "none" }, // Firefox
    "-ms-overflow-style": { display: "none" }, // IE/Edge

    ".slick-track": {
      display: "flex !important",
    },
    ".slick-slide": {
      height: "auto",
      "@media(min-width: 48em)": {
        marginRight: "3rem",
      },
    },
    ".slick-slide > div": {
      height: "100%",
    },
    ".slick-prev, .slick-next": {
      display: "none !important",
    },
    ".slick-dots": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "left",
      bottom: "-50px",
    },
    ".slick-dots li": {
      width: "15px",
      height: "15px",
      margin: "0 5px",
      borderRadius: "999px",
      transition: "all 0.5s ease-in-out",
      willChange: "width",
      backgroundColor: "#8B1A2F", // Rich Burgundy
      color: "#F9FAFB",
      fontSize: "10px",
    },
    ".slick-dots li.slick-active": {
      backgroundColor: "#A54B56", // Lighter Burgundy
      width: "45px",
      color: "#B8B8B8",
    },
  },
  theme: {
    keyframes: {
      neonPulse: neonPulse,
    },
    tokens: {
      animations: {
        neonPulse: { value: "neonPulse 2s ease-in-out infinite" },
      },
      colors: {
        // Design Tokens
        "summit-primary": { value: "#B8B8B8" }, // Silver
        "summit-secondary": { value: "#8B1A2F" }, // Rich Burgundy
        "summit-accent": { value: "#A54B56" }, // Lighter Burgundy
        "summit-bg": { value: "#F9FAFB" }, // Light BG
        "summit-text": { value: "#2C2C2C" }, // Main Text
        "summit-border": { value: "#D1D5DB" },
        "summit-muted": { value: "#6B7280" },
        "summit-text-light": { value: "#F9FAFB" },
        "summit-text-soft": { value: "#E5E7EB" },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: "{colors.summit-primary}",
        },
        secondary: {
          value: "{colors.summit-secondary}",
        },
        accent: {
          value: "{colors.summit-accent}",
        },
        bg: {
          default: { value: "{colors.summit-bg}" },
          subtle: { value: "#F3F4F6" },
          muted: { value: "#E5E7EB" },
        },
        fg: {
          default: { value: "{colors.summit-text}" },
          muted: { value: "{colors.summit-muted}" },
          light: { value: "{colors.summit-text-light}" },
          soft: { value: "{colors.summit-text-soft}" },
          darkerSoft: { value: "#8A8D92" }, // Slightly darker soft text
          evenDarkerSoft: { value: "#A1A5A9" }, // Even darker soft text
        },
        border: {
          value: "{colors.summit-border}",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
