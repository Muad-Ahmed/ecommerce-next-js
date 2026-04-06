"use client";

import store from "@/store/store";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // scroll to top on reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
