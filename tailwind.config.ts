import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#C0E218",
"secondary": "#3f1de7",
"accent": "#00ffff",
"neutral": "#65a30d",
"base-100": "#ffffff",
"info": "#ca8a04",
"success": "#00ff00",
"warning": "#F37121",
"error": "#ff0000",
        },
 
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#C0E218",
          "secondary": "#3f1de7",
          "accent": "#00ffff",
          "neutral": "#65a30d",
          "base-100": "#000000",
          "info": "#ca8a04",
          "success": "#00ff00",
          "warning": "#F37121",
          "error": "#ff0000",
        }
      }
    ],//false:仅亮+暗|true:所有主题|array:像这样的特定主题[“亮”、“暗”、“纸杯蛋糕”]
    darkTheme: "mytheme", //暗模式的一个包含主题的名称
    base: true, // 默认为根元素应用背景色和前景色
    styled: true, // 包括所有组件的daisyUI颜色和设计决策
    utils: true, //添加响应和修饰符实用程序类
    prefix: "", //用于daisyUI类名的前缀（组件、修饰符和响应类名。不是颜色）
    logs: true, // 在构建CSS时在控制台中显示有关daisyUI版本和使用的配置的信息
    themeRoot: ":root", // 接收主题颜色CSS变量的元素
  },
};
export default config;
