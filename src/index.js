// inspired by https://dribbble.com/shots/14195587-Landing-page-for-gold-jewelry-website

import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom";
// All hooks are cross platform now
import { useSpring } from "@react-spring/core";
// Platform knowledge is in here ...
import { a } from "@react-spring/web";
import "./global.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
