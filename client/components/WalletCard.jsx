import React from 'react';

export default function WalletCard({ wallet }) {
  return (
    <div className="wallet-card">
      <h2>SkyWallet</h2>

      <p>
        Wallet ID: {wallet.walletId}
      </p>

      <p>
        Balance: {wallet.balance} SKD
      </p>
    </div>
  );
}
