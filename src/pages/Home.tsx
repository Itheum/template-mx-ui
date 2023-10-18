import React from "react";
import { MinterTransaction } from "./MinterTransaction";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full tracking-wide ">
      <span className="text-5xl leading-relaxed">
        This a <b className="uppercase text-blue-400">TEMPLATE</b> that has everything that is needed to start building on&nbsp;
        <b className="uppercase text-purple-500">Itheum</b>
      </span>

      <span className="mr-4">After connecting your wallet you can try the mint button</span>
      <MinterTransaction></MinterTransaction>
    </div>
  );
};
