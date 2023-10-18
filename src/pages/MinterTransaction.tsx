import React, { useEffect, useState } from "react";
import { SftMinter } from "@itheum/sdk-mx-data-nft";
import { useGetAccount, useGetPendingTransactions } from "@multiversx/sdk-dapp/hooks";
import { Address } from "@multiversx/sdk-core/out";
import { refreshAccount } from "@multiversx/sdk-dapp/utils/account";
import { sendTransactions } from "@multiversx/sdk-dapp/services";

export const MinterTransaction: React.FC = () => {
  const { address } = useGetAccount();
  const [minter, setMinter] = useState();
  //   useEffect(() => {
  //     setMinter(new  const minter = new SftMinter("devnet");)
  //   }, []);

  async function createTransaction() {
    console.log(process.env.REACT_APP_NFT_STORAGE_KEY);
    console.log("TRANSACTION");
    const minter = new SftMinter("devnet");
    try {
      /// docs
      /// https://itheum.github.io/sdk-mx-data-nft/classes/SftMinter.html#mint
      const tx = await minter.mint(
        new Address(address),
        "DemoSTF",
        "https://api.itheumcloud-stg.com/datamarshalapi/router/v1",
        "https://raw.githubusercontent.com/Itheum/data-assets/main/Health/H1__Signs_of_Anxiety_in_American_Households_due_to_Covid19/dataset.json",
        "https://raw.githubusercontent.com/Itheum/data-assets/main/Health/H1__Signs_of_Anxiety_in_American_Households_due_to_Covid19/preview.json",
        10,
        100,
        "Support transaction flow",
        "Flow of a mint",
        20 * 10 ** 18, /// the anti-spam tax
        {
          nftStorageToken: process.env.REACT_APP_NFT_STORAGE_KEY,
        }
      );
      console.log(tx);

      await refreshAccount();
      const { sessionId, error } = await sendTransactions({
        transactions: tx,
        transactionsDisplayInfo: {
          processingMessage: "Support",
          errorMessage: "Support error",
          successMessage: "Support success",
        },
        redirectAfterSign: false,
      });
    } catch (error) {
      console.log("Error");
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full tracking-wide ">
      <span>The following button is going to mint an STF, and send the transaction to the blockchain</span>
      <button className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl" onClick={createTransaction}>
        {" "}
        Mint a SFT
      </button>
    </div>
  );
};
