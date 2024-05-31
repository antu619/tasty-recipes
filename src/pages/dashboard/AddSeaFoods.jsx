import toast from 'react-hot-toast';

const AddSeaFoods = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const foodData = { name, imgUrl, price, description };
    console.log(foodData);

    await fetch("http://localhost:5000/seaFoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      toast.success('Successfully added a sea food recipe', {
        duration: 4000,
        position: 'top-center',})
      form.reset()
    })
  };

  return (
    <div
      className="h-[720px] mt-5 lg:mt-0 p-5"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8NcsR50/tasty-recipes-cover.png)",
      }}
    >
      <h2 className="text-3xl text-center font-semibold lg:mt-40 lg:mb-7 my-5 text-white">
        Add Sea Foods
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <input
              type="text"
              name="name"
              placeholder="food name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-2">
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
            <input
              className="btn border-white text-white btn-outline hover:bg-neutral hover:text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeaFoods;
