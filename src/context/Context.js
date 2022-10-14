import React from "react";
export const cartContext = React.createContext();

const Context = ({ children }) => {
  const [data, setData] = React.useState();
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState();
  const [modal, setModal] = React.useState();
  const [priceSelected,setPriceSelected]=React.useState();
  const[applyFilter,setApplyFilter]=React.useState({
    category:"",
    price:""
  })

  const filtering=(filterCategory,filterPrice)=>{
    setApplyFilter({
      category:filterCategory,
      price:filterPrice
    })

    console.log("category"+ applyFilter.category)
    console.log("price"+applyFilter.price)
  }



  function getItemQuantity(id) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <cartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cart,
        setCart,
        search,
        setSearch,
        data,
        setData,
        categoryFilter,
        setCategoryFilter,
        modal,
        setModal,
        priceSelected,
        setPriceSelected,
        filtering,
        setApplyFilter,
        applyFilter
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default Context;
