'use client';

import styles from './accountHeader.module.css';

import FeedIcon from '@/icons/feedIcon';
import StatisticsIcon from '@/icons/statisticsIcon';
import AddIcon from '@/icons/addIcon';
import SignoutIcon from '@/icons/signoutIcon';

import React from 'react';
import useMedia from '@/hooks/useMedia';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/account/posts':
      return 'Poste suas fotos';
    case '/account/statistics':
      return 'Estatísticas';
    default:
      return 'Minha Conta';
  }
}

export default function AccountHeader() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    // userLogout();
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/account" className={pathname === '/account' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link href="/account/statistics" className={pathname === '/account/statistics' ? 'active' : ''}>
          <StatisticsIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link href="/account/posts" className={pathname === '/account/posts' ? 'active' : ''}>
          <AddIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <SignoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};