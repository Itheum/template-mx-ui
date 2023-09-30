import React, { useState } from "react";
import { useGetAccountInfo } from "@multiversx/sdk-dapp/hooks";
import { logout } from "@multiversx/sdk-dapp/utils";
import { Link } from "react-router-dom";
import { ConnetionButtons } from "./ConnectionButton";
import { Home, LogIn, LogOut, Wallet } from "lucide-react";

export const Navbar: React.FC = () => {
  const { address } = useGetAccountInfo();
  const isLoggedIn = Boolean(address);
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <nav className="text-white text-xl">
      <div className="flex flex-row justify-around items-center h-32">
        <Link to={"/"} className="flex flex-row">
          <div className="flex flex-col font-mono">
            <div className="flex flex-row">
              <span className="text-xl text-center">ITH&nbsp;</span>
              <span className="text-xl font-semibold text-end text-[hsl(280,100%,60%)] font-mono">UI</span>
            </div>
            <span className="text-3xl font-bold text-[hsl(200,100%,60%)]">TEMPLATE</span>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link to="/">
            <button className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl">
              <Home />
            </button>
          </Link>
          {isLoggedIn ? (
            <Link to="/wallet">
              <button className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl">
                <Wallet />
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
        {!isLoggedIn ? (
          <div className="connect-wallet-container">
            <button
              className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl"
              onClick={() => setIsShown(!isShown)}>
              <LogIn />
            </button>
            <ConnetionButtons isShown={isShown} />
          </div>
        ) : (
          <div className="flex flex-row">
            <button
              className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl"
              onClick={() => logout("/")}>
              <LogOut />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
