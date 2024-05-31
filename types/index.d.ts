import { ReactSVGElement } from "react";

export interface NavLinks {
  [x: string]: string | StaticImport;
  route: string;
  label: string;
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface TokenProps {
  name: string;
  chainId: number | string;
  symbol: string;
  decimals: number;
  logoUri?: string;
}
export interface SocialLinkProps {
  url: string;
  name: string;
}
interface ProjectCardTypes {
  banner: string;
  chain: number;
  created_at: string;
  description: string;
  endDate: number;
  features: string;
  id: number;
  logo: string;
  marketCap?: string;
  marketTraction?: string;
  name: string;
  overview?: string;
  pricePerTicket: number;
  publicPool?: boolean;
  publicPrice: string | number;
  raise: number;
  revenue?: string;
  socialLinks: string;
  startDate: number;
  status: "upcoming" | "closed";
  tagLine: string;
  tags: string;
  tokenUtility?: string;
  tokensPerTicket: number;
  totalSupply: string | number;
  totalTickets: number;
  totalTokens: number;
  valuation?: string;
  zeePerTicket: number;
  filledSpots: number;
  tokenDetails?: TokenProps;
  totalUsers?: Array;
}

export type SOCIALTYPE =
  | "twitter"
  | "telegram"
  | "website"
  | "github"
  | "discord"
  | "youtube";

export interface IDOSteps {
  name: string;
  description: string;
  href: string;
  status: string;
  linkText: string;
  imageUrl: string;
  darkImageUrl: string;
}

export interface FeaturesPropsType {
  name: string;
  description: string;
  icon: object | ReactSVGElement | string | any;
}

export interface ChainIdPropsTypes {
  MAINNET: number;
  GÖRLI: number;
  BSC: number;
  POLYGON: number;
  AVALANCHE: number;
  FANTOM: number;
  OPTIMISM: number;
  ARBITRUM: number;
  ZKEVM: number;
  ZKSYNCERA: number;
  BASE: number;
  MANTA: number;
  MANTLE: number;
  MODE: number;
  BSC_TESTNET: number;
}
export interface TicketAllocation extends React.HTMLAttributes<HTMLDivElement> {
  tokenSymbol: string;
  publicPrice: number;
  pricePerTicket: number;
  numberOfTickets?: number;
}
