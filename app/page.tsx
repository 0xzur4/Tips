
import { Kaushan_Script, Arvo } from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});


export default function Home() {
  return (
    <div className="flex flex-col   m-0 p-0 min-h-screen">
      <main className="flex flex-1 justify-center flex-col text-center p-4 gap-5">
        <h1 className={`text-[200px] sm:text-[300px] ${kaushan.className}`}>Tips</h1>
        <p className={`${arvo.className}`}>Share what you know and tell everyone</p>
      </main>
    </div>
  );
}
