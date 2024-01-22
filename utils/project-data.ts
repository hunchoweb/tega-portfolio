import { StaticImageData } from "next/image";

import Coffee from "../images/Coffee.jpg";
import CoffeeMobile from "../images/Coffee_small.jpg";
import KingsCounty from "../images/King_County.jpeg"

export type ProjectType = {
  name: string;
  description: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  code: string;
  slug: string;
  tools: string[];
};

export const projectsList: ProjectType[] = [
  {
    name: "COFFEE TYPE SALES ANALYSIS",
    description:
      "Sales data analysis guides businesses in optimizing inventory and marketing for improved sales performance.",
    image: Coffee,
    mobileImage: CoffeeMobile,
    code: "https://medium.com/@odjetega/coffee-order-sales-analysis-an-end-to-end-project-using-excel-c8d9abbecfde",
    slug: "coffee-type",
    tools: ["Excel", "Tableau"],
  },
  {
    name: "King County House Sale Report",
    description:
      "Clean, visualize, and build an interactive dashboard for Kings County, Washington DC housing sales data from 2014 to 2015.",
    image: KingsCounty,
    code: "https://medium.com/@odjetega/kings-county-washington-house-sales-report-using-excel-and-tableau-3e465831638e",
    slug: "food-phantoms",
    tools: ["Excel", "Tableau"],
  },
];
