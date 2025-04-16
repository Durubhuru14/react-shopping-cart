import EarthenBottle from "../assets/product_images/Earthen_Bottle.jpg";
import FocusPaperRefill from "../assets/product_images/Focus_Paper_Refill.jpg";
import MachinedMechanicalPencil from "../assets/product_images/Machined_Mechanical_Pencil.jpg";
import NomadTumbler from "../assets/product_images/Nomad_Tumbler.jpg";
import completeKitGrayCase from "../assets/product_images/complete_kit_gray_case.webp";
import discboundJournal from "../assets/product_images/Discbound_Journal.webp";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: 48,
    imageSrc: EarthenBottle,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    price: 35,
    imageSrc: NomadTumbler,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    price: 89,
    imageSrc: FocusPaperRefill,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: 35,
    imageSrc: MachinedMechanicalPencil,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Complete Kit Gray Case",
    price: 195,
    imageSrc: completeKitGrayCase,
    imageAlt: "Complete stationary kit with gray case",
  },
  {
    id: 6,
    name: "Discbound Journal",
    price: 49,
    imageSrc: discboundJournal,
    imageAlt: "Discbound journal with green outer cover",
  },
];

export default products;
