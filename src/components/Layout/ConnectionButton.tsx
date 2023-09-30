import React from "react";
import { ExtensionLoginButton, WalletConnectLoginButton, WebWalletLoginButton } from "@multiversx/sdk-dapp/UI";

type ConnetionButtonsProps = {
  isShown: boolean;
};

export const ConnetionButtons: React.FC<ConnetionButtonsProps> = (props) => {
  const { isShown } = props;

  return (
    <>
      {isShown && (
        <div className="absolute">
          <div className="flex flex-col pt-1.5 gap-3">
            <div className="shadow-inner shadow-white w-40 rounded-xl mt-2 bg-transparent backdrop-blur py-3">
              <ExtensionLoginButton
                className="!rounded-xl !border-0 !bg-gradient-to-r !from-blue-400 !to-purple-500 !shadow-xl"
                callbackRoute={"/"}
                loginButtonText={"Extension"}
              />
              <WalletConnectLoginButton
                className="!rounded-xl !border-0 !bg-gradient-to-r !from-blue-400 !to-purple-500 !shadow-xl"
                callbackRoute={"/"}
                loginButtonText={"xPortal"}
              />
              <WebWalletLoginButton
                className="!rounded-xl !border-0 !bg-gradient-to-r !from-blue-400 !to-purple-500 !shadow-xl"
                callbackRoute={"/"}
                loginButtonText={"Web wallet"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
