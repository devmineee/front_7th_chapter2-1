import { ProductList, SearchForm } from "../components";
import { PageLayout } from "./PageLayout";

export const HomePage = ({
  filters,
  pagination,
  products,
  categories,
  loading,
  cartCount = 0,
  hasMore = true,
  loadingMore = false,
  totalCount = 0,
}) => {
  return PageLayout({
    children: `
    ${SearchForm({ filters, pagination, categories, loading })}
    ${ProductList({ products, loading, hasMore, loadingMore, totalCount })}
    `,
    pageType: "home",
    cartCount,
  });
};
