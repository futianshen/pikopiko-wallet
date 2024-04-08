import React, { useMemo, useState, useEffect, useRef } from "react"
import { PetTabContent } from "@/components/pet/PetTabContent"
import { SocialTabContent } from "@/components/social/SocialTabContent"
import { Tabs } from "@/components/ui/Tabs"
import { Nav, TabList } from "@/components/ui/compose"
import styles from "@/styles/Pages.module.css"
import {
  ConnectionProvider,
  WalletProvider,
  useWallet
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { RecoilRoot } from "recoil"
import "@solana/wallet-adapter-react-ui/styles.css";
import dynamic from "next/dynamic"
import {
  createUser,
  getPets,
  getUser,
  createPet
} from "@/utils/api"
import { atom, useRecoilState } from 'recoil';
import { userAtom, petAtom } from "@/state/state"

const ConnectButton = dynamic(async () => await import("../components/ui/connect_button"), {
  ssr: false,
});

export default function Index() {

  const [network, setNetwork] = useState(WalletAdapterNetwork.Mainnet);

  const endpoint = "https://crimson-aged-tab.solana-mainnet.quiknode.pro/0549be48d0eca16c79f957850d2188870a359b1f/";
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: network }),
    ],
    [network]
  );

  return (
    <RecoilRoot>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <Home/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </RecoilRoot>
  )
}


export const Home = () => {

  const { publicKey, connected } = useWallet();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const [petInfo, setPetInfo] = useRecoilState(petAtom);
  const init = async () => {
    const userData = await getUser(publicKey.toBase58());
    if (userData) {
      setUserInfo(userData.data);
      setPetInfo(userData.data.pets[0]);
      return;
    }
    if (!userData) {

      const exampleUser = {
        username: publicKey.toBase58(),
        password: "demo password"
      }
      const resp = await createUser(exampleUser);
      if (!resp) {
        return;
      }
      setUserInfo(resp.data);
      const petResp = await createPet();
      setPetInfo(petResp.data);
    }
  }

  const getExp = async () => {
    for (;;) {
      //msleep
      await msleep(5000);
      const userData = await getUser(publicKey.toBase58());
      if (userData) {
        setUserInfo(userData.data);
        setPetInfo(userData.data.pets[0]);
      }
    }
  }
  async function msleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  useEffect(() => {
    if (connected && publicKey) {

      init();
    }
  }, [connected, publicKey]);

  useEffect(() => {
    if (userInfo) {
      getExp();
    }
  }, [userInfo, petInfo])

  return (
    <main className={styles.main}>
      <div className="w-full h-full flex flex-col justify-between">
        <ConnectButton
          className='connect'
          style={{
            fontSize: "inherit",
            fontFamily: "inherit",
            color: "inherit",
          }}
        />
        <Nav />
        <Tabs
          defaultValue="social"
          className="h-full w-full flex flex-col justify-between"
        >
          <div className="h-full grid place-items-center">
            <div>
              <PetTabContent />
              <SocialTabContent />
            </div>
          </div>
          <TabList />
        </Tabs>
      </div>
    </main>
  )
}