import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
const productImages = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
  "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
  "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
  "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
  "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
];




  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.helpers.arrayElement(productImages),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
