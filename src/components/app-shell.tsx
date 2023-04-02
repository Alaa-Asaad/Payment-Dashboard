// import { AppShell, useMantineTheme } from '@mantine/core';
// import { useMediaQuery, useToggle } from '@mantine/hooks';
// import { ReactNode } from 'react';

// import HeaderBar from './header/header';
// import NavbarLeft from './nav-bar/navbar';

// interface Props {
//   hideNav?: boolean;
//   children: ReactNode;
//   gm: string[];
// }

// export default function Layout({ hideNav, children, gm }: Props) {
//   const theme = useMantineTheme();
//   const isDesktopScreen = useMediaQuery('(min-width: 56.25em)', true, {
//     getInitialValueInEffect: false,
//   });
//   const [opened, setOpened] = useToggle([false, true]);

//   const links = [
//     {
//       link: '/about',
//       label: 'Features',
//     },
//     {
//       link: '/pricing',
//       label: 'Pricing',
//     },
//     {
//       link: '/learn',
//       label: 'Learn',
//     },
//     {
//       link: '/community',
//       label: 'Community',
//     },
//   ];
//   console.log(isDesktopScreen);
//   return (
//     <AppShell
//       padding="md"
//       navbarOffsetBreakpoint="sm"
//       asideOffsetBreakpoint="sm"
//       fixed
//       navbar={
//         hideNav && isDesktopScreen ? (
//           <span />
//         ) : (
//           <NavbarLeft opened={opened || isDesktopScreen} gm={gm} />
//         )
//       }
//       styles={() => ({
//         main: {
//           backgroundColor:
//             theme.colorScheme === 'dark'
//               ? theme.colors.dark[8]
//               : theme.colors.gray[0],
//         },
//       })}
//     >
//       {children}
//     </AppShell>
//   );
// }

// Layout.defaultProps = {
//   hideNav: false,
// };
