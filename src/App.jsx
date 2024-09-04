import React from "react";
import "./App.css";

const Header = React.lazy(() => import("./components/header/Header"));
const HeadBanner = React.lazy(() => import("./components/banner/HeadBanner"));
const About = React.lazy(() => import("./components/about/About"));
const Product = React.lazy(() => import("./components/product/Product"));
const Review = React.lazy(() => import("./components/review/Review"));
const Process = React.lazy(() => import("./components/process/Process"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Chat = React.lazy(() => import("./components/chat/Chat"));
const ScrollToTop = React.lazy(() => import("./components/scroll/ScrollToTop"));

function App() {
  return (
    <div>
      <Header />
      <HeadBanner />
      <About />
      <Product />
      <Review />
      <Process />
      <Contact />
      <Chat />
      <ScrollToTop />
    </div>
  );
}

export default App;
