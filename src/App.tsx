import React from "react";
import "./App.css";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import { NotificationModal, SignTransactionsModals, TransactionsToastList } from "@multiversx/sdk-dapp/UI";
import { apiTimeout, walletConnectV2ProjectId } from "./config";
import { Navbar } from "./components/Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Wallet } from "./pages/Wallet";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";
/// sdk  Sft minter sa fac o tranzactie de mint valida si sa o trimit pe blockchain 
function App() {
  return (
    <DappProvider
      environment={"devnet"}
      customNetworkConfig={{
        name: "customConfig",
        apiTimeout,
        walletConnectV2ProjectId,
      }}>
      <TransactionsToastList successfulToastLifetime={1000} customToastClassName="absolute" />
      <NotificationModal />
      <SignTransactionsModals className="custom-class-for-modals" />
      <div className="background bg-no-repeat bg-cover">
        <div className="bg-gradient-to-b from-gray-900/70 via-[#300171]/50 to-slate-900/70">
          <div className="flex flex-col min-h-screen text-white">
            <Navbar />
            <Content>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/wallet" element={<Wallet />}></Route>
              </Routes>
            </Content>
            <Footer />
          </div>
        </div>
      </div>
    </DappProvider>
  );
}

export default App;
