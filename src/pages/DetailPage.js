import { ProductDetail } from "../components";
import { PageLayout } from "./PageLayout";

export const DetailPage = ({ product, loading, cartCount = 0, relatedProducts = [] }) => {
  return PageLayout({
    children: `
      ${ProductDetail({ product, loading, relatedProducts })}
    `,
    pageType: "detail",
    cartCount,
  });
};
