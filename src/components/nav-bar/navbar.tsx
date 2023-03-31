import { Navbar, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import SideLinkType from '@/types/side-links-type';

import useStyles from './styles/navbar-style';

export default function NavbarLeft({ sideLinks }: SideLinkType) {
  const isDesktopScreen = useMediaQuery('(min-width: 720px)');

  const { classes, cx } = useStyles();
  const [active] = useState('Payments Methods');
  const [activeLink, setActiveLink] = useState('Security');
  const router = useRouter();

  const links = sideLinks.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === item.link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(item.link);
        router.push(`/dashboard/${item.link}`);
      }}
      key={item.link}
    >
      {item.title}
    </Link>
  ));
  if (!isDesktopScreen) return null;

  return (
    <Navbar height={750}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
