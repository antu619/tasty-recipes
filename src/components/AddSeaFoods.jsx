

const AddSeaFoods = () => {
    return (
        <div className="h-[720px]" style={{
            backgroundImage:
              "url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)",
          }}>
            <h2 className="text-3xl text-center font-semibold lg:mt-48 lg:mb-7 my-5 text-white">Add Sea Foods</h2>
            <div className="flex justify-center">
            <form  className="w-full max-w-xl">
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              name="name"
              placeholder="food name"
              className="input input-bordered w-full"
              required
            />
             <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-2">
            <input
              type="text"
              name="description"
              placeholder="description"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-2">
            <input
              type="text"
              name="imgUrl"
              placeholder="photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            
            <button className="btn border-white text-white btn-outline hover:bg-white hover:text-neutral">
              Submit
            </button>
          </div>
          
        </form>
            </div>
        </div>
    );
};

export default AddSeaFoods;