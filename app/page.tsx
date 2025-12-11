
import {Roboto } from "next/font/google";
import DVDBounce from "./components/animationText";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex justify-center item-center ">
        <h1 className={`text-[200px] sm:text-[300px] ${roboto.className}`}>Tips</h1>
      </main>
    </div>
  );
}
