import { Header, Autocomplete, Group, Burger } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';

import DrawerComp from './drawer';
import useStyles from './styles/header-style';

interface HeaderBarSearch {
  links: { link: string; label: string }[];
}

export default function HeaderBar({ links }: HeaderBarSearch) {
  const { classes } = useStyles();
  const [open, setOpen] = useToggle([false, true]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height="auto" className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            className={classes.burger}
            opened={open}
            onClick={() => setOpen()}
            size="sm"
          />
          <DrawerComp opened={open} setOpen={setOpen} />
          <Link className={classes.link} href="/">
            React Hero
          </Link>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={['Paypal', 'Stripe']}
          />
        </Group>
      </div>
    </Header>
  );
}
