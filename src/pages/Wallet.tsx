import React, { Suspense, useEffect, useState } from "react";
import { DataNft } from "@itheum/sdk-mx-data-nft/out";
import { useGetAccount, useGetPendingTransactions } from "@multiversx/sdk-dapp/hooks";
import { DataNftCard } from "../components/DataNftCard";

export const Wallet: React.FC = () => {
  const { address } = useGetAccount();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const [dataNfts, setDataNfts] = useState<DataNft[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const _dataNfts = await DataNft.ownedByAddress(address);
      console.log(_dataNfts);
      setDataNfts(_dataNfts);

      setIsLoading(false);
    }
    if (!hasPendingTransactions) {
      fetchData();
    }
  }, [hasPendingTransactions]);

  if (isLoading) {
    return <Suspense fallback={<div>Loading</div>}></Suspense>;
  }

  return (
    <div className="flex flex-col justify-between gap-4 w-full mx-auto">
      <div className="text-left text-4xl pb-6 xl:pl-12 pl-4">Your Data NFT's</div>
      <div className="grid base:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {dataNfts &&
          dataNfts.map((data, index) => {
            return (
              <div className="flex flex-row justify-center items-center" key={index}>
                <DataNftCard dataNft={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
