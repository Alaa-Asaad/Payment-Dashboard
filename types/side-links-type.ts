interface singleLink {
  title: string;
  link: string;
}

interface SideLinkType {
  sideLinks: singleLink[];
  activeLinkChoose: string;
}

export default SideLinkType;
