import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { searchData } from "../slice/searchSlice";
import getNamecity from "../api/getNameCity";
const Input = () => {
  const [suggest, setSuggest] = useState([]);
  const [payload, setPayload] = useState({
    city:"",
    country_code:"",
    
  })
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = async (e) => {
    const newSearch = e.target.value;
    const search_key = newSearch.toLowerCase().trim();
    setSearch(newSearch);
    
    const result = await getNamecity(search_key);
    setSuggest(result.data.list);
    
    
  };
  console.log(suggest);
  const handleSelect = (item) => {
    setSearch(item.name)
    setPayload({
      city: item.name,
      country_code: item.sys.country,
    
    })
    setSuggest([])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchData(payload));
    setSuggest([])
  };
console.log(payload)
  return (
    <div className="py-5">
      <form
        className="flex items-center justify-between  "
        onSubmit={handleSubmit}
      >
        <div className=" w-full relative">
          <input
            type="text"
            className=" outline-none px-3 py-1 pr-7 w-full rounded-full"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">
            <CiSearch className="absolute right-1 top-1.5 text-xl hover:cursor-pointer transition-transform duration-300 transform hover:scale-110 " />
          </button>
          
          
          {suggest.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
              {suggest.map((item) => (
                <div key={item.place_id} onClick={() => handleSelect(item)} className="p-2  hover:bg-gray-100 cursor-pointer">
                  <p className="text-black">{item.name}, {item.sys.country}</p>
                  
                </div>
              ))}
            </div>
          )}
          
            
        </div>
      </form>
    </div>
  );
};

export default Input;
