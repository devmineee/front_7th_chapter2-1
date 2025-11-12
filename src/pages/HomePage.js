import { ProductList, SearchForm } from "../components";
import { PageLayout } from "./PageLayout";

export const HomePage = ({ filters, pagination, products, categories, loading }) => {
  return PageLayout({
    children: `
    ${SearchForm({ filters, pagination, categories, loading })}
    ${ProductList({ products, loading })}
    `,
    pageType: "home",
  });
};
