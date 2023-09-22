import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background ">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-500">
        TESTING
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
