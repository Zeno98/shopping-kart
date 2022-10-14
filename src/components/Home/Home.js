import React from "react";
import SinglePage from "../SinglePage/SinglePage";
import Filter from "../Filter/Filter";
import { cartContext } from "../../context/Context";
import "./Home.css";

const Home = ({ data, filterState }) => {
  const { search, categoryFilter, modal, setModal,priceSelected,applyFilter  } =
    React.useContext(cartContext);

  // console.log(categoryFilter);
  // console.log(search.length);

  // console.log(data)

  // data &&
  //   data
  //     .filter((items) => {
  //       return items.category == categoryFilter;
  //     })
  //     .map((ele) => console.log(ele));

  return (
    <div className="home">
      <Filter data={data} />

      <div className="productContainer">
        <>
          {

            applyFilter.category && applyFilter.price ?
             (
              data.Filter((item)=>{
                return item.category === applyFilter.category && item.price === applyFilter.price
              }).map((ele)=>{
                return(
                  <>
                   <SinglePage items={ele} key={ele.id} />
                  </>
                )
              })

            )
            :
            (
              applyFilter.category && applyFilter.price==undefined ?
              (
                data.filter((items)=>{
                  return items.category===applyFilter.category
                }).map((ele)=>{
                  return(
                    <>
                     <SinglePage items={ele} key={ele.id} />
                    </>
                  )
                })
              )
              :
              (
                applyFilter.price && applyFilter.category==undefined ?
                (
                  data.filter((items)=>{
                    return items.price===applyFilter.price
                  }).map((ele)=>{
                    return(
                      <>
                       <SinglePage items={ele} key={ele.id} />
                      </>
                    )
                  })

                )
                :
              (
                <>
                {data
                 ? data.map((items) => {
                     return (
                       <>
                         <SinglePage items={items} key={items.id} />
                       </>
                     );
                   })
                 : "loading..."}
             </>
              )
              )
              

            )

             
          //    priceSelected ? (
          //     data.filter((items)=>{
          //        return items.price <= priceSelected;
          //      }).map((ele)=>{
          //         return(
          //             <>
          //             <SinglePage items={ele} key={ele.id} />
          //             </>
          //         )
          //      })):
          // (categoryFilter && search.length == 0) ? (
          //   data
          //     .filter((items) => {
          //       return items.category == categoryFilter;
          //     })
          //     .map((ele) => {
          //       return (
          //         <>
          //           <SinglePage items={ele} key={ele.id} />
          //         </>
          //       );
          //     })
          // ) : search.length > 0 ? (
          //   <>
          //     {data
          //       .filter((items) => {
          //         return items.title
          //           .toLowerCase()
          //           .includes(search.toLowerCase());
          //       })
          //       .map((items) => {
          //         console.log("Inside Search");
          //         return <>{<SinglePage items={items} key={items.id} />}</>;
          //       })}
          //   </>
          // ) : (
          //   <>
          //     {data
          //       ? data.map((items) => {
          //           return (
          //             <>
          //               <SinglePage items={items} key={items.id} />
          //             </>
          //           );
          //         })
          //       : "loading..."}
          //   </>
          // )}
}
        </>
      </div>
    </div>
  );
};

export default Home;
