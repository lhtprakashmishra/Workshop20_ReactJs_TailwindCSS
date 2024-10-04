import { useState } from "react";

import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import Subscription from "./components/subscription";
import Footer from "./components/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Header />
      <Features />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
