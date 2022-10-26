const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/helpers": path.resolve(__dirname, "src/helpers"),
      "@/layout": path.resolve(__dirname, "src/layout"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/context": path.resolve(__dirname, "src/context"),
    },
  },
};
