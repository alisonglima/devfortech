import { IProduct } from "../types";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Iphone 13 Pro Max",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346280",
    brand: "Apple",
    price: 6999,
    inStock: true,
  },
  {
    id: 2,
    name: "Rog Phone",
    image: "https://www.notebookcheck.info/uploads/tx_nbc2/AsusROGPhone5Ultimate__1_.png",
    brand: "Asus",
    price: 9999,
    inStock: true,
  },
  {
    id: 3,
    name: "Redmi Note Pro",
    image:
      "https://files.tecnoblog.net/wp-content/uploads/2021/10/redmi-note-10-pro-produto-700x700.png",
    brand: "Xiaomi",
    price: 1999,
    inStock: true,
  },
];
