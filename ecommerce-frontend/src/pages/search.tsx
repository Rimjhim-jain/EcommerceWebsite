import { useState } from "react";
import ProductCard from "../components/product-card";

 const Search = () => {

  const [search,setSearch] = useState("");
  const [sort,setSort] = useState("");
  const [maxPrice,setMaxPrice] = useState(10000);
  const [category,setCategory] = useState("");
  const [page,setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage= page > 1;
  const isNextPage = page < 4;

   return (
    <div className="product-search-page">
        <aside>
          <h2>Filters</h2>
          <div>
            <h4>Sort</h4>
            <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}>
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>

          <div>
            <h4>Max Price: {maxPrice || ""}</h4>
            <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}/>
          </div>

          <div>
            <h4>Category</h4>
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
              <option value="">All</option>
              <option value="">Sample1</option>
              <option value="">Sample2</option>
            </select>
          </div>
        </aside>
        <main>
          <h1>Products</h1>
          <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          <div className="search-product-list">
            <ProductCard 
              productId="vvbb" 
              photo="https://www.lifewire.com/thmb/WKv1B2Cr8bQS7yhS_btM1HKx5Jc=/850x850/filters:no_upscale():max_bytes(150000):strip_icc()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg" 
              name="Macbook" 
              price={100} 
              stock={1} 
              handler={addToCartHandler}/>
          </div>

          <article>
            <button disabled={!isPrevPage} onClick={() => setPage(prev=>prev-1)}>Prev</button>
            <span>{page} of {4}</span>
            <button disabled={!isNextPage} onClick={() => setPage(prev=>prev+1)}>Next</button>
          </article>
        </main>
    </div>
   )
 }
 
 export default Search;