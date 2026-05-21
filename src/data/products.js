// Import all images for products
import mysorePak1 from "../assets/images/MYSORE PAK1.jpg";
import mysorePak2 from "../assets/images/MYSORE PAK.jpg";
import ravaKesari1 from "../assets/images/RAVA KESARI.jpg";
import ravaKesari2 from "../assets/images/RAVA KESARI.jpg";
import chocolateBrownies1 from "../assets/images/CHOCOLATE BROWNIES.jpg";
import chocolateBrownies2 from "../assets/images/CHOCOLATE BROWNIES.jpg";
import coconutBurfi1 from "../assets/images/COCONUT BURFI.jpg";
import coconutBurfi2 from "../assets/images/COCONUT BURFI.jpg";
import boondiLaddu1 from "../assets/images/BOONDI LADDU.jpg";
import boondiLaddu2 from "../assets/images/BOONDI LADDU.jpg";
import turkishDelight1 from "../assets/images/TURKISH DELIGHT.jpg";
import turkishDelight2 from "../assets/images/TURKISH DELIGHT.jpg";
import eggFlour1 from "../assets/images/EGG FLOUR1.jpg";
import eggFlour2 from "../assets/images/EGG FLOUR.jpg";
import healthMix1 from "../assets/images/HEALTH MIX.jpg";
import healthMix2 from "../assets/images/HEALTH MIX.jpg";
import karaBoondi1 from "../assets/images/KARA BOONDI2.jpg";
import karaBoondi2 from "../assets/images/KARA BOONDI1.jpg";
import karaSippi1 from "../assets/images/KARA SIPPI1.jpg";
import karaSippi2 from "../assets/images/KARA SIPPI2.jpg";
import kuchchiMurukku1 from "../assets/images/KUCHCHIMURUKKU1.jpg";
import mixture1 from "../assets/images/MIXTURE1.jpg";
import mixture2 from "../assets/images/MIXTURE.jpg";
import mulluMurukku1 from "../assets/images/MULLU MURUKKU1.jpg";
import mulluMurukku2 from "../assets/images/MULLU MURUKKU2.jpg";
import mulluMurukku3 from "../assets/images/MULLU MURUKKU3.jpg";
import payathamUrundai1 from "../assets/images/PAYATHAMURUNDAI1.jpg";
import payathamUrundai2 from "../assets/images/PAYATHAM URUNDAI.jpg";
import ravaLaddu1 from "../assets/images/RAVALADDU2.jpg";
import ravaLaddu2 from "../assets/images/RAVALADDU3.jpg";
import ravaLaddu3 from "../assets/images/RAVALADDU4.jpg";
import richLaddu1 from "../assets/images/RICH LADDU2.jpg";
import richLaddu2 from "../assets/images/RICH LADDU1.jpg";
import thattuVadai1 from "../assets/images/THATTU VADAI1.jpg";

export const products = [
  {
    id: 1,
    name: "Mysore Pak",
    price: 197,
    rating: 5,
    reviews: 207,
    isBestSeller: true,
    category: "sweets",
    images: [mysorePak1, mysorePak2, mysorePak1]
  },
  {
    id: 2,
    name: "Rava Kesari",
    price: 105,
    rating: 5,
    reviews: 196,
    isBestSeller: true,
    category: "sweets",
    images: [ravaKesari1, ravaKesari2, ravaKesari1]
  },
  {
    id: 3,
    name: "Chocolate Brownies",
    price: 96,
    rating: 5,
    reviews: 111,
    isBestSeller: true,
    category: "sweets",
    images: [chocolateBrownies1, chocolateBrownies2, chocolateBrownies1]
  },
  {
    id: 4,
    name: "Coconut Burfi",
    price: 67,
    rating: 5,
    reviews: 111,
    isBestSeller: true,
    category: "sweets",
    images: [coconutBurfi1, coconutBurfi2, coconutBurfi1]
  },
  {
    id: 5,
    name: "Boondi Laddu",
    price: 86,
    rating: 5,
    reviews: 72,
    isBestSeller: true,
    category: "sweets",
    images: [boondiLaddu1, boondiLaddu2, boondiLaddu1]
  },
  {
    id: 6,
    name: "Turkish Delight",
    price: 86,
    rating: 5,
    reviews: 72,
    isBestSeller: true,
    category: "sweets",
    images: [turkishDelight1, turkishDelight2, turkishDelight1]
  },
  {
    id: 7,
    name: "Egg Flour",
    price: 149,
    rating: 4,
    reviews: 12,
    isBestSeller: false,
    category: "snacks",
    images: [eggFlour1, eggFlour2, eggFlour1]
  },
  {
    id: 8,
    name: "Health Mix",
    price: 175,
    rating: 4,
    reviews: 32,
    isBestSeller: true,
    category: "health",
    images: [healthMix1, healthMix2, healthMix1]
  },
  {
    id: 9,
    name: "Kara Boondi",
    price: 155,
    rating: 4,
    reviews: 27,
    isBestSeller: false,
    category: "snacks",
    images: [karaBoondi1, karaBoondi2, karaBoondi1]
  },
  {
    id: 10,
    name: "Kara Sippi",
    price: 168,
    rating: 4,
    reviews: 19,
    isBestSeller: false,
    category: "snacks",
    images: [karaSippi1, karaSippi2, karaSippi1]
  },
  {
    id: 11,
    name: "Kuchchi Murukku",
    price: 172,
    rating: 4,
    reviews: 56,
    isBestSeller: true,
    category: "snacks",
    images: [kuchchiMurukku1, kuchchiMurukku1, kuchchiMurukku1]
  },
  {
    id: 12,
    name: "Mixture",
    price: 158,
    rating: 4,
    reviews: 94,
    isBestSeller: false,
    category: "snacks",
    images: [mixture1, mixture2, mixture1]
  },
  {
    id: 13,
    name: "Mullu Murukku",
    price: 164,
    rating: 4,
    reviews: 41,
    isBestSeller: false,
    category: "snacks",
    images: [mulluMurukku1, mulluMurukku2, mulluMurukku3]
  },
  {
    id: 14,
    name: "Payatham Urundai",
    price: 185,
    rating: 4,
    reviews: 23,
    isBestSeller: false,
    category: "sweets",
    images: [payathamUrundai1, payathamUrundai2, payathamUrundai1]
  },
  {
    id: 15,
    name: "Rava Laddu",
    price: 179,
    rating: 4,
    reviews: 68,
    isBestSeller: true,
    category: "sweets",
    images: [ravaLaddu1, ravaLaddu2, ravaLaddu3]
  },
  {
    id: 16,
    name: "Rich Laddu",
    price: 199,
    rating: 5,
    reviews: 88,
    isBestSeller: true,
    category: "sweets",
    images: [richLaddu1, richLaddu2, richLaddu1]
  },
  {
    id: 17,
    name: "Thattu Vadai",
    price: 143,
    rating: 4,
    reviews: 37,
    isBestSeller: false,
    category: "snacks",
    images: [thattuVadai1, thattuVadai1, thattuVadai1]
  }
];