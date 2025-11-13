import { Header, Footer, Toast } from "../components";

export const PageLayout = ({ children, pageType, cartCount = 0 }) => {
  return `
    <div class="min-h-screen bg-gray-50">
      ${Header(pageType, cartCount)}
      <main class="max-w-md mx-auto px-4 py-4">
        ${children}
      </main>
      ${Toast()}
      ${Footer()}
    </div>
  `;
};
