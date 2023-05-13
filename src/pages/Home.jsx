

export default function Home() {
  return (
    <div className="bg-[#130114] h-screen">
      {/* Container */}
      <div className="flex flex-col p-6">
        <div>
          <p className="flex justify-center my-5 text-white text-4xl mt-[60px]">
            Mushrooms
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap justify-center">
          <div className="card-zoom">
            <div className="card-zoom-image bg-whiteButton"></div>
            <h1 className="card-zoom-text mb-[80px]">WHITE</h1>
            <h1 className="card-zoom-text mt-[70px]">BUTTONS</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-crimini"></div>
            <h1 className="card-zoom-text">CRIMINI</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-shiitake"></div>
            <h1 className="card-zoom-text">SHIITAKE</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-enoki scale-[135%]"></div>
            <h1 className="card-zoom-text">ENOKI</h1>
          </div>
        </div>
      </div>
    </div>
  );
}