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
    isBestSeller: true,
    category: "sweets",
    images: [mysorePak1, mysorePak2, mysorePak1],
    ingredients: ["Gram Flour", "Ghee", "Nuts", "White Sugar"],
    description: "Originating from the royal kitchens of Mysore, it's known for its buttery smooth consistency and a subtle, aromatic flavor."
  },
  {
    id: 2,
    name: "Rava Kesari",
    price: 105,
    rating: 5,
    isBestSeller: true,
    category: "sweets",
    images: [ravaKesari1, ravaKesari2, ravaKesari1],
    ingredients: ["Rava (Semolina)", "Sugar", "Ghee", "Cashews", "Raisins", "Cardamom Powder", "Saffron", "Food Color (Orange)"],
    description: "A classic South Indian sweet dessert made with roasted semolina, generous amounts of ghee, and flavored with cardamom and saffron. This vibrant orange-colored delicacy has a smooth, melt-in-mouth texture and is garnished with crunchy cashews and sweet raisins. Perfect for festivals and celebrations!"
  },
  {
    id: 3,
    name: "Chocolate Brownies",
    price: 96,
    rating: 5,
    isBestSeller: true,
    category: "sweets",
    images: [chocolateBrownies1, chocolateBrownies2, chocolateBrownies1],
    ingredients: ["Dark Chocolate", "All-Purpose Flour", "Butter", "Eggs", "Sugar", "Optional Nuts", "Vanilla Extract"],
    description: "Indulge in the ultimate chocolate experience with Anara Sweets' Chocolate Brownie - a decadent, fudgy treat made for true chocolate lovers."
  },
  {
    id: 4,
    name: "Coconut Burfi",
    price: 67,
    rating: 5,
    isBestSeller: true,
    category: "sweets",
    images: [coconutBurfi1, coconutBurfi2, coconutBurfi1],
    ingredients: ["Scrapped Coconut", "Milk", "White Sugar", "Cardamom", "Almonds", "Permitted Colors"],
    description: "Anara Sweets brings you the finest Coconut Burfi, handcrafted with love and tradition to make every bite truly special!"
  },
  {
    id: 5,
    name: "Boondi Laddu",
    price: 86,
    rating: 5,
    isBestSeller: true,
    category: "sweets",
    images: [boondiLaddu1, boondiLaddu2, boondiLaddu1],
    ingredients: ["Gram Flour", "Sugar", "Ghee", "Cardamoms"],
    description: "Anara Sweets brings you the finest Boondi Laddus, made with premium ingredients and crafted to perfection."
  },
  {
    id: 6,
    name: "Turkish Delight",
    price: 86,
    rating: 5,
    isBestSeller: true,
    category: "sweets",
    images: [turkishDelight1, turkishDelight2, turkishDelight1],
    ingredients: ["Sugar", "Cornstarch", "Water", "Rose Water", "Lemon Juice", "Cream of Tartar", "Powdered Sugar", "Food Color"],
    description: "Anara Sweets presents authentic Turkish Delight - a soft, chewy, and aromatic confection that transports your taste buds to the streets of Istanbul."
  },
  {
    id: 7,
    name: "Egg Flour",
    price: 149,
    rating: 4,
    isBestSeller: false,
    category: "Healthmix",
    images: [eggFlour1, eggFlour2, eggFlour1],
    ingredients: ["Whole Eggs", "Milk Solids", "Natural Protein Isolate", "Stabilizers", "Permitted Preservatives"],
    description: "Anara Sweets' Egg Flour is a versatile and protein-rich alternative to traditional flours, specially crafted for baking enthusiasts and health-conscious individuals."
  },
  {
    id: 8,
    name: "Health Mix",
    price: 175,
    rating: 4,
    isBestSeller: true,
    category: "Healthmix",
    images: [healthMix1, healthMix2, healthMix1],
    ingredients: ["Ragi (Finger Millet)", "Wheat", "Barley", "Green Gram", "Soybean", "Almonds", "Cardamom", "Jaggery", "Dry Ginger"],
    description: "Anara Sweets' Health Mix is a nutrient-dense traditional Indian porridge mix, carefully crafted to provide complete nourishment for the entire family."
  },
  {
    id: 9,
    name: "Kara Boondi",
    price: 155,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [karaBoondi1, karaBoondi2, karaBoondi1],
    ingredients: ["Gram Flour", "Rice Flour", "Red Chili Powder", "Salt", "Oil", "Roasted Peanuts", "Fried Chana Dhal"],
    description: "Kara boondi is a spiced version of boondi and a mixture consisting of boondi, peanuts, fried chana dhal curry leaves and a few spices."
  },
  {
    id: 10,
    name: "Kara Sippi",
    price: 168,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [karaSippi1, karaSippi2, karaSippi1],
    ingredients: ["Wheat Flour", "Vegetable Oil", "Red Chilli Powder", "Rice Flour", "Salt", "Asafoetida (Hing)", "Cumin Seeds", "Curry Leaves"],
    description: "Kara Sippi is a traditional spicy delight crafted with care, offering the perfect indulgence for those who love bold and fiery flavors."
  },
  {
    id: 11,
    name: "Kuchchi Murukku",
    price: 172,
    rating: 4,
    isBestSeller: true,
    category: "Traditional",
    images: [kuchchiMurukku1, kuchchiMurukku1, kuchchiMurukku1],
    ingredients: ["Wheat Flour", "Gram Flour", "Vegetable Oil", "White Sesame Seeds", "Butter", "Salt", "Red Chili Powder", "Asafoetida (Hing)"],
    description: "Perfect for festive occasions or as an everyday treat, Kuchchi Murukku promises a satisfying and flavorful snacking experience with every bite."
  },
  {
    id: 12,
    name: "Mixture",
    price: 158,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [mixture1, mixture2, mixture1],
    ingredients: ["Gram Flour", "Rice Flour", "Peanuts", "Cashews", "Curry Leaves", "Red Chili Powder", "Salt", "Asafoetida (Hing)", "Mustard Seeds", "Oil", "Coconut Slices"],
    description: "Anara Sweets' Mixture is a classic South Indian savory snack mix that brings together a medley of textures and flavors in every handful!"
  },
  {
    id: 13,
    name: "Mullu Murukku",
    price: 164,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [mulluMurukku1, mulluMurukku2, mulluMurukku3],
    ingredients: ["Wheat Flour", "Gram Flour", "Vegetable Oil", "White Sesame Seeds", "Butter", "Salt", "Red Chili Powder", "Asafoetida (Hing)", "Cumin Seeds"],
    description: "Mullu Murukku is a treat for the evening tea time, commonly made at home during festivals & special occasions."
  },
  {
    id: 14,
    name: "Payatham Urundai",
    price: 185,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [payathamUrundai1, payathamUrundai2, payathamUrundai1],
    ingredients: ["Green Gram Flour", "Coconut Scraped", "White Sugar", "Steamed White Flour", "White Raw Rice Flour", "Cardamom", "Ghee"],
    description: "Payatham Urundai is a Jaffna special made of Green Gram Flour, Coconut Scraped, White Sugar, and Steamed White Flour."
  },
  {
    id: 15,
    name: "Rava Laddu",
    price: 179,
    rating: 4,
    isBestSeller: true,
    category: "Traditional",
    images: [ravaLaddu1, ravaLaddu2, ravaLaddu3],
    description: "Perfect for festivals, celebrations, or as a quick indulgence, Rava Laddu brings a taste of tradition with every bite.",
    ingredients: ["Semolina", "White Sugar", "Milkmaid", "Plums", "Peanuts"]
  },
  {
    id: 16,
    name: "Rich Laddu",
    price: 199,
    rating: 5,
    isBestSeller: true,
    category: "Traditional",
    images: [richLaddu1, richLaddu2, richLaddu1],
    description: "Rich Laddu is a delectable and nutritious sweet made from premium dates, nuts, and aromatic spices.",
    ingredients: ["Semolina", "Premium Dates", "White Sugar", "White Raw Rice Flour", "Steamed Wheat Flour", "Peanuts"]
  },
  {
    id: 17,
    name: "Thattu Vadai",
    price: 143,
    rating: 4,
    isBestSeller: false,
    category: "Traditional",
    images: [thattuVadai1, thattuVadai1, thattuVadai1],
    description: "Thattu Vadai is a crispy and flavorful South Indian snack made with traditional spices, perfect for tea-time enjoyment and festive gatherings.",
    ingredients: ["Rice Flour", "Urad Dal Flour", "Red Chili Powder", "Salt", "Asafoetida", "Curry Leaves", "Oil for Frying"]
  },
  {
    id: 18,
    name: "Signature Delight",
    price: 143,
    rating: 4,
    isBestSeller: false,
    category: "Combos",
    images: [thattuVadai1, thattuVadai1, thattuVadai1],
    description: "Signature Delight - Corporate Gift Pack by Anara Sweets is a premium gifting solution designed for businesses looking to impress clients and employees with authentic traditional sweets.",
    ingredients: ["Gram Flour", "Vegetable Oil", "White Sesame", "Semolina", "Premium Dates", "White Sugar", "White Raw Rice Flour"]
  },
  {
    id: 19,
    name: "Veetla Visehsam",
    price: 143,
    rating: 4,
    isBestSeller: false,
    category: "Combos",
    images: [thattuVadai1, thattuVadai1, thattuVadai1],
    description: "Veetla Visehsam - Premium Sweet Gift Pack is a luxury gift box curated to celebrate special moments with the finest traditional Jaffna sweets.",
    ingredients: ["Gram Flour", "Vegetable Oil", "White Sesame", "Semolina", "Premium Dates", "White Sugar", "White Raw Rice Flour", "Steamed Wheat Flour"]
  },
  {
    id: 20,
    name: "Royal Delight",
    price: 143,
    rating: 4,
    isBestSeller: false,
    category: "Combos",
    images: [thattuVadai1, thattuVadai1, thattuVadai1],
    description: "Royal Delight Classic Sweet Box is a premium selection of sweets perfect for special occasions and gifting.",
    ingredients: ["Gram Flour", "Milk Powder", "Sugar", "Ghee", "Coconut", "Peanuts", "Dates"]
  }
];