import { useState } from "react";

import SearchComponents from "./components/SearchComponents";
import NFTView from "./components/NFTView"

function App() {
  const [wallet, setWallet] = useState(null)

  return (
    <div className="flex items-center justify-center min-h-screen">
      {
        wallet ? (
          <NFTView wallet={wallet} />
        ) : (
          <SearchComponents wallet={wallet} setWallet={setWallet} />
        )
      }
    </div>
  );
}

export default App;
