import snakePlant from "../assets/plants/snake-plant.jpg";
import spiderPlant from "../assets/plants/spider-plant.jpg";
import peaceLily from "../assets/plants/peace-lily.jpg";
import arecaPalm from "../assets/plants/areca-palm.jpg";
import rubberPlant from "../assets/plants/rubber-plant.jpg";

import aloeVera from "../assets/plants/aloe-vera.jpg";
import chamomile from "../assets/plants/chamomile.jpg";
import basil from "../assets/plants/basil.jpg";
import echinacea from "../assets/plants/echinacea.jpg";
import calendula from "../assets/plants/calendula.jpg";

import lavender from "../assets/plants/lavender-repellent.jpg";
import rosemary from "../assets/plants/rosemary.jpg";
import mint from "../assets/plants/mint.jpg";
import jasmine from "../assets/plants/jasmine.jpg";
import lemonBalm from "../assets/plants/lemon-balm.jpg";

import monstera from "../assets/plants/monstera.jpg";
import pothos from "../assets/plants/pothos.jpg";
import zzPlant from "../assets/plants/zz-plant.jpg";
import philodendron from "../assets/plants/philodendron.jpg";
import chineseEvergreen from "../assets/plants/chinese-evergreen.jpg";

import echeveria from "../assets/plants/echeveria.jpg";
import jadePlant from "../assets/plants/jade-plant.jpg";
import haworthia from "../assets/plants/haworthia.jpg";
import burrosTail from "../assets/plants/burros-tail.jpg";
import pandaPlant from "../assets/plants/panda-plant.jpg";

import orchid from "../assets/plants/orchid.jpg";
import anthurium from "../assets/plants/anthurium.jpg";
import begonia from "../assets/plants/begonia.jpg";
import hibiscus from "../assets/plants/hibiscus.jpg";
import africanViolet from "../assets/plants/african-violet.jpg";

import boxwood from "../assets/plants/boxwood.jpg";
import hydrangea from "../assets/plants/hydrangea.jpg";
import gardenia from "../assets/plants/gardenia.jpg";
import japaneseMaple from "../assets/plants/japanese-maple.jpg";
import bougainvillea from "../assets/plants/bougainvillea.jpg";

import citronella from "../assets/plants/citronella.jpg";
import marigold from "../assets/plants/marigold.jpg";
import catnip from "../assets/plants/catnip.jpg";
import lemongrass from "../assets/plants/lemongrass.jpg";
import lavenderRepellent from "../assets/plants/lavender-repellent.jpg";
const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    image: snakePlant,
    cost: 15,
    stock: 20,
    rating: 4.8,
    description:"Known for its exceptional air-purifying properties, the Snake Plant is one of the easiest houseplants to care for and thrives in low-light environments."
  },
  {
    id: 2,
    name: "Spider Plant",
    category: "Air Purifying",
    image: spiderPlant,
    cost: 12,
    stock: 15,
    rating: 4.7,
    description:"The Spider Plant is a resilient indoor favorite that helps improve air quality while producing elegant arching leaves and baby offshoots."
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Air Purifying",
    image: peaceLily,
    cost: 18,
    stock: 10,
    rating: 4.9,
   description:
"Peace Lily combines elegant white blooms with excellent air-cleaning abilities, making it one of the most popular indoor plants worldwide."
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Air Purifying",
    image: arecaPalm,
    cost: 22,
    stock: 12,
    rating: 4.6,
  description:
"Areca Palm adds a tropical atmosphere to any room while naturally increasing humidity and improving indoor air quality."
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Air Purifying",
    image: rubberPlant,
    cost: 20,
    stock: 14,
    rating: 4.7,
    description:
"The Rubber Plant is admired for its large glossy leaves and ability to filter toxins from indoor spaces."
  },

  {
    id: 6,
    name: "Aloe Vera",
    category: "Medicinal",
    image: aloeVera,
    cost: 14,
    stock: 18,
    rating: 4.9,
    description:
"Aloe Vera is widely recognized for its soothing gel, commonly used for skin care and minor burns while also serving as a beautiful indoor succulent."
  },
  {
    id: 7,
    name: "Chamomile",
    category: "Medicinal",
    image: chamomile,
    cost: 10,
    stock: 20,
    rating: 4.5,
   description:
"Chamomile is valued for its calming properties and delicate flowers, often used in herbal teas and wellness remedies."
  },
  {
    id: 8,
    name: "Basil",
    category: "Medicinal",
    image: basil,
    cost: 8,
    stock: 25,
    rating: 4.8,
   description:
"Basil is a versatile herb appreciated for both culinary uses and its traditional medicinal benefits."
  },
  {
    id: 9,
    name: "Echinacea",
    category: "Medicinal",
    image: echinacea,
    cost: 16,
    stock: 10,
    rating: 4.7,
   description:
"Echinacea is known for supporting immune health and producing vibrant daisy-like flowers."
  },
  {
    id: 10,
    name: "Calendula",
    category: "Medicinal",
    image: calendula,
    cost: 11,
    stock: 15,
    rating: 4.6,
    description:
"Calendula offers bright blooms and has long been used in natural skincare and herbal preparations."
  },

  {
    id: 11,
    name: "Lavender",
    category: "Aromatic",
    image: lavender,
    cost: 20,
    stock: 10,
    rating: 5,
   description:
"Lavender is famous for its relaxing fragrance, beautiful purple flowers and calming therapeutic properties."
  },
  {
    id: 12,
    name: "Rosemary",
    category: "Aromatic",
    image: rosemary,
    cost: 13,
    stock: 20,
    rating: 4.7,
  description:
"Rosemary provides an invigorating aroma and is widely used in cooking, wellness and ornamental gardens."
  },
  {
    id: 13,
    name: "Mint",
    category: "Aromatic",
    image: mint,
    cost: 9,
    stock: 30,
    rating: 4.8,
description:
"Mint produces refreshing leaves ideal for beverages, culinary recipes and aromatic gardens."
  },
  {
    id: 14,
    name: "Jasmine",
    category: "Aromatic",
    image: jasmine,
    cost: 18,
    stock: 12,
    rating: 4.9,
description:
"Jasmine delivers intensely fragrant blossoms that create a luxurious atmosphere indoors or outdoors."
  },
  {
    id: 15,
    name: "Lemon Balm",
    category: "Aromatic",
    image: lemonBalm,
    cost: 12,
    stock: 16,
    rating: 4.6,
description:
"Lemon Balm is loved for its fresh citrus scent and traditional use in relaxation remedies."
  },

  {
    id: 16,
    name: "Monstera",
    category: "Indoor",
    image: monstera,
    cost: 25,
    stock: 10,
    rating: 4.9,
description:
"Monstera is a modern design icon known for its dramatic split leaves and tropical appearance."
  },
  {
    id: 17,
    name: "Pothos",
    category: "Indoor",
    image: pothos,
    cost: 14,
    stock: 20,
    rating: 4.8,
description:
"Pothos is an extremely adaptable indoor vine that thrives with minimal care and brightens any space."
  },
  {
    id: 18,
    name: "ZZ Plant",
    category: "Indoor",
    image: zzPlant,
    cost: 22,
    stock: 12,
    rating: 4.8,
description:
"ZZ Plant is one of the toughest houseplants available, tolerating low light and infrequent watering."
  },
  {
    id: 19,
    name: "Philodendron",
    category: "Indoor",
    image: philodendron,
    cost: 19,
    stock: 15,
    rating: 4.7,
description:
"Philodendron combines lush tropical foliage with easy maintenance, making it a favorite among collectors."
  },
  {
    id: 20,
    name: "Chinese Evergreen",
    category: "Indoor",
    image: chineseEvergreen,
    cost: 21,
    stock: 12,
    rating: 4.6,
description:
"Chinese Evergreen showcases attractive patterned leaves and adapts well to indoor environments."
  },

  {
    id: 21,
    name: "Echeveria",
    category: "Succulent",
    image: echeveria,
    cost: 12,
    stock: 25,
    rating: 4.8,
  description:
"Echeveria forms elegant rosettes and is prized for its striking geometric appearance."
  },
  {
    id: 22,
    name: "Jade Plant",
    category: "Succulent",
    image: jadePlant,
    cost: 15,
    stock: 20,
    rating: 4.9,
description:
"Jade Plant is often associated with prosperity and good fortune while requiring minimal maintenance."
  },
  {
    id: 23,
    name: "Haworthia",
    category: "Succulent",
    image: haworthia,
    cost: 10,
    stock: 30,
    rating: 4.7,
description:
"Haworthia is a compact succulent featuring distinctive striped leaves and excellent durability."
  },
  {
    id: 24,
    name: "Burro's Tail",
    category: "Succulent",
    image: burrosTail,
    cost: 18,
    stock: 10,
    rating: 4.8,
  description:
"Burro's Tail creates stunning cascading stems filled with plump leaves perfect for hanging displays."
  },
  {
    id: 25,
    name: "Panda Plant",
    category: "Succulent",
    image: pandaPlant,
    cost: 13,
    stock: 18,
    rating: 4.7,
description:
"Panda Plant is recognized for its soft fuzzy leaves and unique silver-green coloration."
  },

  {
    id: 26,
    name: "Orchid",
    category: "Flowering",
    image: orchid,
    cost: 28,
    stock: 8,
    rating: 5,
description:
"Orchid represents elegance and sophistication with long-lasting blooms and exotic beauty."
  },
  {
    id: 27,
    name: "Anthurium",
    category: "Flowering",
    image: anthurium,
    cost: 24,
    stock: 10,
    rating: 4.8,
description:
"Anthurium produces vibrant waxy flowers that remain attractive for extended periods."
  },
  {
    id: 28,
    name: "Begonia",
    category: "Flowering",
    image: begonia,
    cost: 17,
    stock: 14,
    rating: 4.7,
   description:
"Begonia offers colorful foliage and flowers that make it a decorative highlight in any collection."
  },
  {
    id: 29,
    name: "Hibiscus",
    category: "Flowering",
    image: hibiscus,
    cost: 19,
    stock: 12,
    rating: 4.8,
description:
"Hibiscus displays large tropical blooms and thrives in warm sunny conditions."
  },
  {
    id: 30,
    name: "African Violet",
    category: "Flowering",
    image: africanViolet,
    cost: 16,
    stock: 15,
    rating: 4.7,
description:
"African Violet is cherished for its compact size and continuous display of colorful flowers."
  },

  {
    id: 31,
    name: "Boxwood",
    category: "Outdoor",
    image: boxwood,
    cost: 30,
    stock: 8,
    rating: 4.6,
description:
"Boxwood is a classic landscape shrub widely used for elegant hedges and formal gardens."
  },
  {
    id: 32,
    name: "Hydrangea",
    category: "Outdoor",
    image: hydrangea,
    cost: 26,
    stock: 10,
    rating: 4.8,
description:
"Hydrangea produces spectacular clusters of blooms that change color depending on soil conditions."
  },
  {
    id: 33,
    name: "Gardenia",
    category: "Outdoor",
    image: gardenia,
    cost: 22,
    stock: 12,
    rating: 4.8,
description:
"Gardenia is famous for its intensely fragrant white flowers and glossy evergreen foliage."
  },
  {
    id: 34,
    name: "Japanese Maple",
    category: "Outdoor",
    image: japaneseMaple,
    cost: 35,
    stock: 5,
    rating: 5,
description:
"Japanese Maple is a premium ornamental tree admired for its graceful form and seasonal color changes."
  },
  {
    id: 35,
    name: "Bougainvillea",
    category: "Outdoor",
    image: bougainvillea,
    cost: 20,
    stock: 12,
    rating: 4.7,
description:
"Bougainvillea creates vibrant cascades of color and flourishes in sunny outdoor spaces."
  },

  {
    id: 36,
    name: "Citronella",
    category: "Insect Repellent",
    image: citronella,
    cost: 14,
    stock: 20,
    rating: 4.8,
   description:
"Citronella is widely used as a natural mosquito deterrent while adding attractive foliage to gardens."
  },
  {
    id: 37,
    name: "Marigold",
    category: "Insect Repellent",
    image: marigold,
    cost: 10,
    stock: 25,
    rating: 4.6,
description:
"Marigold helps discourage garden pests and brightens landscapes with vivid golden flowers."
  },
  {
    id: 38,
    name: "Catnip",
    category: "Insect Repellent",
    image: catnip,
    cost: 11,
    stock: 18,
    rating: 4.5,
description:
"Catnip naturally repels certain insects while attracting feline attention with its aromatic leaves."
  },
  {
    id: 39,
    name: "Lemongrass",
    category: "Insect Repellent",
    image: lemongrass,
    cost: 13,
    stock: 20,
    rating: 4.7,
 description:
"Lemongrass offers a refreshing citrus scent and is commonly used to help repel mosquitoes."
  },
  {
    id: 40,
    name: "Lavender Repellent",
    category: "Insect Repellent",
    image: lavenderRepellent,
    cost: 15,
    stock: 15,
    rating: 4.8,
 description:
"Lavender Repellent combines beautiful blooms with natural insect-repelling properties."
  }
];

export default plants;