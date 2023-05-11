import React from "react";


function App() {
  return (
    <div className="bg-[#130114] h-screen">
      <div className="flex flex-col justify-between items-center p-6">
        <div className="text-white text-5xl font-bold tracking-widest ">
          <p className="">My Garage</p>
          <div className="bg-myAvatar card-zoom-avatar"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="card-zoom">
            <div className="card-zoom-image bg-beetleYellow"></div>
            <h1 className="card-zoom-text mb-[80px]">VW</h1>
            <h1 className="card-zoom-text mt-[70px]">LOVE</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-beetleCamping"></div>
            <h1 className="card-zoom-text mb-[80px]">VW</h1>
            <h1 className="card-zoom-text mt-[70px]">CAMPING</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-beetleBeauty"></div>
            <h1 className="card-zoom-text mb-[80px]">MY</h1>
            <h1 className="card-zoom-text mt-[70px]">LIFE</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-beetleLife"></div>
            <h1 className="card-zoom-text mb-[80px]">vw</h1>
            <h1 className="card-zoom-text mt-[70px]">1300</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
