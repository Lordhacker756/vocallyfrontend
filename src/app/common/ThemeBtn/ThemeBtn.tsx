import React from "react";

// Button component that can be used throughout the app
function ThemeBtn({ title, theme }: { title: string; theme: string }) {
  const styles =
    theme === "dark"
      ? "border-[1px]  border-gray-700 rounded-full lg:w-[60%] w-[100%] px-4 py-2 mt-4 bg-transparent text-gray-400 font-bold hover:bg-purple-600 hover:text-white transition-colors duration-300 ease-in-out "
      : "border-[1px]  border-gray-700 rounded-full lg:w-[60%] w-[100%] px-4 py-2 mt-4 bg-purple-500 font-bold hover:bg-purple-600 hover:text-white transition-colors duration-300 ease-in-out animate-pulse text-white ";

  return <button className={styles}>{title}</button>;
}

export default ThemeBtn;
