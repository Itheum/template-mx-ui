import React from "react";
import { DataNft } from "@itheum/sdk-mx-data-nft/out";

type DataNftCardsProps = {
  dataNft: DataNft;
};
export const DataNftCard: React.FC<DataNftCardsProps> = (props) => {
  const { dataNft } = props;

  return (
    <div className="w-[16rem] bg-transparent backdrop-blur-xl shadow-inner shadow-white rounded-xl p-4">
      <img src={`${dataNft.nftImgUrl}`} alt="Data NFT Image" />
      <p className="text-slate-300 py-3 text-sm">{dataNft.tokenIdentifier}</p>
      <span className="text-xl font-semibold tracking-wide line-clamp-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {dataNft.title}
      </span>
      <span className="text-base font-extralight font-sans line-clamp-3 text-white h-[72px]">
        {dataNft.description}
      </span>
    </div>
  );
};
