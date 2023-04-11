"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
