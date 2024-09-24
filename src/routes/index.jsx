import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Fav } from "../pages/Fav";
import { Order } from "../pages/Order";
import { Read } from "../pages/Read";
import { DefaultLayout } from "../layout/DefaultLayout";


export function Routers() {
  return (
    <Routes>
        <Route element={<DefaultLayout />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/order" element={<Order />} />
        <Route path="/read" element={<Read />} />
    </Routes>
  );
}
