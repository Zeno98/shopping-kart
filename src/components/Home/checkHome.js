// import React from "react";
// import SinglePage from "../SinglePage/SinglePage";
// import Filter from "../Filter/Filter";
// import { cartContext } from "../../context/Context";
// import "./Home.css";

// const Home = ({ data, filterState }) => {
//     const { search, categoryFilter, modal, setModal, priceSelected } =
//         React.useContext(cartContext);

//     console.log(categoryFilter);
//     console.log(search.length);

//     // console.log(data)

//     data &&
//         data
//             .filter((items) => {
//                 return items.category == categoryFilter;
//             })
//             .map((ele) => console.log(ele));

//     return (
//         <div className="home">
//             <Filter data={data} />

//             <div className="productContainer">





//                 <>
//                     {





//                         priceSelected ? (
//                             data.filter((items)=>{
//                                return items.price === priceSelected;
//                              }).map((ele)=>{
//                                 return(
//                                     <>
//                                     <SinglePage items={ele} key={ele.id} />
//                                     </>
//                                 )
//                              })):
//                     (categoryFilter && search.length == 0) ? (
//                     data
//               .filter((items) => {
//                 return items.category == categoryFilter;
//               })
//               .map((ele) => {
//                 return (
//                     <>
//                         <SinglePage items={ele} key={ele.id} />
//                     </>
//                     );
//               })
//           ) : (search.length > 0) ? (
//                     <>
//                         {data
//                             .filter((items) => {
//                                 return items.title
//                                     .toLowerCase()
//                                     .includes(search.toLowerCase());
//                             })
//                             .map((items) => {
//                                 console.log("Inside Search");
//                                 return <>{<SinglePage items={items} key={items.id} />}</>;
//                             })}
//                     </>
//                     ) : (
//                     <>
//                         {data
//                             ? data.map((items) => {
//                                 return (
//                                     <>
//                                         <SinglePage items={items} key={items.id} />
//                                     </>
//                                 );
//                             })
//                             : "loading..."}
//                     </>
//                     )
          
          
          
          
          
          
          
          
          
          
          
          
//           }
//                 </>


















//             </div>
//         </div>
//     );
// };

// export default Home;
