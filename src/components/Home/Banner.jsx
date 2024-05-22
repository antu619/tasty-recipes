
const Banner = () => {
    return (
        <div className="hero h-[720px]" style={{backgroundImage: 'url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className=" text-6xl font-bold text-white">Welcome To Tasty<br /> Recipes</h1>
      <p className="my-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black w-40">Order Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;