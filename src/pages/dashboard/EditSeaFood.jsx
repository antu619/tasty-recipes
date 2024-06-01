import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditSeaFood = () => {
  const seaFood = useLoaderData();

  const [name, setName] = useState(seaFood.name);
  const [price, setPrice] = useState(seaFood.price);
  const [description, setDescription] = useState(seaFood.description);
  const [imgUrl, setImgUrl] = useState(seaFood.imgUrl);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const foodData = { name, imgUrl, price, description };

    const alert = window.confirm(
      `Are you sure? You want to update "${seaFood.name}" recipe.`
    );

    if (alert) {
      await fetch(`https://tasty-recipes-server-iota.vercel.app/seaFoods/${seaFood._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Successfully Updated A Recipe.");
        });
    }
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
        Update A Sea Food
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleUpdate} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input
                type="text"
                name="name"
                placeholder="food name"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Price:
              <input
                type="text"
                name="price"
                placeholder="price"
                className="grow"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Description:
              <input
                type="text"
                name="description"
                placeholder="description"
                className="grow"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Img URL:
              <input
                type="text"
                name="imgUrl"
                placeholder="photo URL"
                className="grow"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn border-white text-white btn-outline hover:bg-neutral hover:text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSeaFood;
