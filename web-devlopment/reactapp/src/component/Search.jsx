import React, { useEffect } from "react";

function Search() {
    const [search, setSearch] = React.useState("")

    useEffect(()=> {
      const getData=()=>{
        console.log("data has been fetched")
      }
      const interval=setTimeout(()=>{
        getData()
      },500)
      return ()=> {
        clearTimeout(interval)
      }
    },[search])
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }
  return (
    <div>
      {/* <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      <input type="text" value={search} onChange={handleSearch} />
    </div>
  );
}


export default Search;