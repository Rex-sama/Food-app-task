import React, { useState, useEffect, Suspense } from "react";
import axios from "./config/axios";
import Header from "./Components/Header";
import ChefCard from "./Components/ChefCard";
import Footer from "./Components/Footer";
import ExploreDishes from "./Components/ExploreDishes";
const Category = React.lazy(() => import("./Components/Category"));
const Popular = React.lazy(() => import("./Components/Popular"));

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .post("mymenu")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <Suspense fallback="Loading">
        <Category list={data.cuisine_list} />
        <Popular data={data.popularweek} />
        <ChefCard chefData={data?.chefweek} />
        <ExploreDishes explore={data?.cusinie_data_result} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
