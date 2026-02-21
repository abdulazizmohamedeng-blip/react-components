import { useEffect, useState } from "react";
import "./style.css";
import { BsGoogle } from "react-icons/bs";
export default function SearchAutoComplete() {
  let [search, setSearch] = useState("");
  let [autoCompleteResut, setAutoCompleteResult] = useState([]);

  async function fetchAutoCompleteData() {
    let resp = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    let data = await resp.json();
    return data;
  }

  useEffect(
    function () {
      async function loadData() {
        let data = await fetchAutoCompleteData();
        if (search.length == 0) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(data.products);
        }
      }
      let timer = setTimeout(loadData, 300);
      return () => clearTimeout(timer);
    },

    [search],
  );

  return (
    <div className="search-wrapper">
      <div className="search-auto-complete">
        <input
          className="search-auto-complete__input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-auto-complete__result">
          {autoCompleteResut.length != 0 &&
            autoCompleteResut.map((item) => <div>{item.title}</div>)}
        </div>
      </div>
    </div>
  );
}
