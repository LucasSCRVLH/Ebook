import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import  {Fav}  from "../pages/Fav";
import { Order } from "../pages/Order";
import { Read } from "../pages/Read";

export function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Fav />} />
      <Route path="/" element={<Order />} />
      <Route path="/" element={<Read />} />
    </Routes>
  );
}
