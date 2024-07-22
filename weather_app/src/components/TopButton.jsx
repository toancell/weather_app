import { useSelector, useDispatch } from "react-redux";

import { searchData } from "../slice/searchSlice";
const TopButton = () => {
  const data = useSelector((state) =>  state.search)
  const dispatch = useDispatch()
  const cities = [
    { id: 1, title: "London",country_code: "uk" },
    { id: 2, title: "Sydney", country_code: "ca"},
    { id: 3, title: "Tokyo", country_code: "jp"},
    { id: 4, title: "Toronto", country_code: "us"},
    { id: 5, title: "Paris", country_code: "fr"},
  ];
  const changeCity =(item)=>{
    const updateData={
      ...data,
      city: item.title,
      country_code: item.country_code,
    }
    dispatch(searchData(updateData))
  }
  return (
     
      <div className="flex justify-between items-center">
        {cities.map((city) => (
          <button className="text-md  text-white hover:underline hover:text-black hover:-translate-y-1 transform duration-300" key={city.id} onClick={() => changeCity(city)} >{city.title}</button>
        ))}
        </div>
      
      
        
      
    
  );
};

export default TopButton;
