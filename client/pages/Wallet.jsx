import React from 'react';
import MainLayout from '../layouts/MainLayout';
import WalletCard from '../components/WalletCard';

export default function Wallet() {
  const wallet = {
    walletId: 'SKD-001-USER',
    balance: 0
  };

  return (
    <MainLayout>
      <h1>Wallet</h1>

      <WalletCard wallet={wallet} />
    </MainLayout>
  );
}
