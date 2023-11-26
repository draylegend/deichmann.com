export interface Product {
  allPrices: Price[];
  articleNumber: number;
  availableColorIcons: ColorIcon[];
  baseProduct: string;
  brand: string;
  brandName: string;
  code: string;
  description: string;
  images: Image[];
  manufacturerAID: string;
  name: string;
  price: Price;
  stock: Stock;
  taglist: Tag[];
  topLevelCategory: Category;
  url: string;
  variantMatrix: Variant[];
  vendor: Vendor;
  volumePricesFlag: boolean;
  averageRating?: number;
  numberOfReviews?: number;
}

export interface Price {
  currencyIso: string;
  formattedValue: string;
  priceType: string;
  value: number;
}

export interface ColorIcon {
  code: string;
  altText: string;
  url: string;
}

export interface Image {
  format: string;
  imageType: string;
  url: string;
}

export interface Stock {
  isValueRounded: boolean;
  stockLevelStatus: string;
}

export interface Tag {
  backgroundColor?: string;
  code: TagCode;
  description: string;
  fontColor?: string;
  frameColor?: string;
}

type TagCode =
  | 'PriceReductionTag30'
  | 'PriceReductionTag50'
  | 'NewTag'
  | 'OnlineExclusiveTag'
  | 'SizeInformationTagXxl'
  | 'SaleTag';

export interface Category {
  code: string;
  codeAlternative: string;
  url: string;
}

export interface Variant {
  sizeMap: Size[];
  variantOption: VariantOption;
}

export interface Size {
  sizeSystem: SizeSystem;
  value: string;
}

export interface SizeSystem {
  code: string;
}

export interface VariantOption {
  url: string;
}

export interface Vendor {
  code: string;
  name: string;
  partner: boolean;
}

export interface PaginationConfig {
  current: number;
  items: Product[];
  pages: number[];
}
