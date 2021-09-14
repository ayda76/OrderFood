import React,{useState,useEffect} from 'react';
import classes from './MealsAvailable.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import Loader from '../Loader/Loader'
//import img from '../../assets/spaghetti-1932466_1920.jpg';
/*
const DUMMY_MEALS = [
    {
      id: 'm1',
      img:img,
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      img:img,
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      img:img,
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      img:img,
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  */
function MealsAvailable(){
const [meals,setMeals]=useState([]);
const [isLoading,setIsLoading]=useState(true);
const [httpError,setHttpError]=useState();

async function fetchData(){
 const response =await fetch('https://food-ordering-d5553-default-rtdb.firebaseio.com/meals.json');
if(!response.ok){
  throw new Error('some thing went wrong!')
}

 const data= await response.json();

let dataArr=[];

for( const key in data){
  dataArr.push({
    id:key,
    name:data[key].name,
    description:data[key].description,
    price:data[key].price
  })
}
setMeals(dataArr);
setIsLoading(false);
}


useEffect(()=>{
  fetchData().catch(()=>{
    setIsLoading(false);
    setHttpError(true)
  });
},[]);
//here if its loading its not gonna show and load the rest
if(isLoading){
  return  <section className={classes.meals}><Loader/></section>;
}

if(httpError){
  return  <section className={classes.meals}><p>fetching error</p></section>;
}
    const mealsList=meals.map((item ) =>
     (<MealItem 
       key={item.id}
        id={item.id} 
        name={item.name}
         price={item.price}
          description={item.description}
        />));
return (
    <section className={classes.meals}>
      <Card>
    <ul>{mealsList}</ul>
    </Card>
  </section>
);
}
export default MealsAvailable;