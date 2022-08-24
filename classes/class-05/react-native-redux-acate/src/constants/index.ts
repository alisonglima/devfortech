import { IProduct } from "../types";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Iphone 13 Pro Max",
    image: "https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png",
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
