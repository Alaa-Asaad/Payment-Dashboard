import { Button, Divider, Drawer, Group, rem, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import links from '@/public/data/sidebar-links.json';

import useStyles from './styles/drawer-styles';

interface Props {
  opened: boolean;
  setOpen: () => void;
}

function DrawerComp({ opened, setOpen }: Props) {
  const { classes, theme } = useStyles();

  const sideLinks = links.map((item) => (
    <Link
      href={`/dashboard/${item.link}`}
      className={classes.link}
      onClick={setOpen}
    >
      {item.title}
    </Link>
  ));
  return (
    <Drawer
      opened={opened}
      onClose={setOpen}
      size="100%"
      padding="md"
      title="Navigation"
      className={classes.hiddenDesktop}
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        <Divider
          my="sm"
          color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
        />
        {sideLinks}

        <Divider
          my="sm"
          color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
        />

        <Group position="center" grow pb="xl" px="md">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </ScrollArea>
    </Drawer>
  );
}

export default DrawerComp;
