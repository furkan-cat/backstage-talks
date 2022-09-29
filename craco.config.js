const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/helpers": path.resolve(__dirname, "src/helpers"),
      "@/pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
