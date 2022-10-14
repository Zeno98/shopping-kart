import React from 'react'
import { Form } from 'react-bootstrap'
import "./Filter.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { cartContext } from '../../context/Context';
import Rating from '../Rating/Rating';
import Button from 'react-bootstrap/Button';
import SinglePage from '../SinglePage/SinglePage';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Filter = ({data}) => {
  const{setData,categoryFilter,setCategoryFilter,priceSelected,setPriceSelected,filtering}=React.useContext(cartContext);

  const[filterState,setFilterState]=React.useState(false);

  const arrangeCategory=[];

  data && data.map((ele)=>{
    arrangeCategory.push(ele.category)
  })

  const newCategory=[]

  for(let i=0;i<arrangeCategory.length;i++){
    let counter=1;
    for(let j=i+1;j<arrangeCategory.length;j++){
      if(arrangeCategory[i]===arrangeCategory[j] && arrangeCategory[i]!="0" ){
        arrangeCategory[j]="0";
        counter++;
      }
    }

    if(counter>1){
      newCategory.push(arrangeCategory[i]);
    }

  }

  const handleFilter=(e)=>{
    setCategoryFilter(e.target.value);
    setFilterState(true)

  }

  const handleClearFilter=()=>{
    window.location.reload();
  }

  const priceFilter=(price)=>{
    setPriceSelected(price)
// console.log(price);
  }

  const check=[]

  // console.log(categoryFilter)
  return (
    <div className='filter'>
        <span className='title'>Filter Products</span>

        <span>Category</span>
        <br/>
    <Form.Select aria-label="Default select example" onChange={handleFilter}>

      
      {
         newCategory.map((catgry,index)=>{
          return(
            <option value={catgry}>
            {catgry}
          </option>

          )
            
        })
          
      }
    </Form.Select>
    <br/>
           <div>

            <Form.Label >Price</Form.Label>
            <div className='priceFilterUl'>
                <li className='priceFilterLi' onClick={()=>{priceFilter(50) }}><h6>Under ₹50</h6></li>
                <li className='priceFilterLi' onClick={()=>{priceFilter(100) }}><h6>₹50 - ₹100</h6></li>
                <li className='priceFilterLi' onClick={()=>{priceFilter(500) }}><h6>₹100 - ₹500</h6></li>
                <li className='priceFilterLi' onClick={()=>{priceFilter(1000) }}><h6>₹500 - ₹1000</h6></li>
                <li className='priceFilterLi' onClick={()=>{priceFilter(1001) }}><h6>Above ₹1000</h6></li>
            </div>
             {/* <Form.Range /> */}
        </div>

        <span>
          Rating <br/>  
          <Rating/>
        </span>

        <div className='ApplyFilterBtn'>
        <Button  variant="primary" onClick={()=>{filtering(categoryFilter,priceSelected)}}>Apply Filter</Button>
        </div>
        <div>
       <Button onClick={handleClearFilter} variant="primary">Clear Filter</Button>
        </div>

      

    </div>
  )
}

export default Filter




