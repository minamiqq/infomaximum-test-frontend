import { Global } from "@emotion/react";
import { FC } from "react";
import Header from "./components/Header";
import { GLOBAL_STYLES } from "./styles/global.styles";

import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Cars/Сatalog";
import Favourites from "./pages/Cars/Favourites";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
