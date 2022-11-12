import React, { ReactNode } from 'react';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

interface Props {
  chidren: ReactNode;
}
export default function MainLayout({ chidren }: Props) {
  return (
    <div>
      <Header />
      {chidren}
      <Footer />
    </div>
  );
}
