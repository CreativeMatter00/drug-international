"use client";

import store from "@/redux/Store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div>
        <div>{children}</div>
      </div>
    </Provider>
  );
}

export default layout;
