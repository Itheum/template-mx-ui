import React, { useState } from "react";
import { SftMinter } from "@itheum/sdk-mx-data-nft";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { Address } from "@multiversx/sdk-core/out";
import { refreshAccount } from "@multiversx/sdk-dapp/utils/account";
import { sendTransactions } from "@multiversx/sdk-dapp/services";

export const MintButton: React.FC = () => {
  const { address } = useGetAccount();
  const [isLoading, setIsLoading] = useState(false);

  async function createTransaction() {
    setIsLoading(true);
    const minter = new SftMinter("devnet");
    // we need to 1st get the live anti-spam minting tax requirement from the smart contract
    const requirements = await minter.viewMinterRequirements(new Address(address));
    const antiSpamTax = requirements?.antiSpamTaxValue;
    try {
      /// docs
      /// https://itheum.github.io/sdk-mx-data-nft/classes/SftMinter.html#mint
      const tx = await minter.mint(
        new Address(address),
        "DemoSFT",
        "https://api.itheumcloud-stg.com/datamarshalapi/router/v1",
        "https://raw.githubusercontent.com/Itheum/data-assets/main/Health/H1__Signs_of_Anxiety_in_American_Households_due_to_Covid19/dataset.json",
        "https://raw.githubusercontent.com/Itheum/data-assets/main/Health/H1__Signs_of_Anxiety_in_American_Households_due_to_Covid19/preview.json",
        10,
        100,
        "Support transaction flow",
        "Flow of a mint",
        antiSpamTax,
        {
          nftStorageToken: process.env.REACT_APP_NFT_STORAGE_KEY,
        }
      );

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
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full tracking-wide ">
      <span>The following button is going to mint an STF, and send the transaction to the blockchain</span>
      <button
        disabled={isLoading}
        className="mt-2 !rounded-xl p-2 border-0 !bg-gradient-to-r !from-blue-400 !to-purple-500 !shadow-xl"
        onClick={createTransaction}>
        {isLoading ? "Loading..." : "Mint an SFT"}
      </button>
    </div>
  );
};
