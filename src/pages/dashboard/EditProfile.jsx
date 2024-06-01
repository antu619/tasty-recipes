import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const userData = {
      name,
      phone,
      email: data?.email,
      address,
    };

    fetch(`http://localhost:5000/users/${data.email}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        toast.success("Successfully updated User Info", {
            duration: 4000,
            position: 'top-right',})
    })
};


  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-10">
        Edit User Info
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleUpdate} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="grow"
                defaultValue={data?.name}
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                className="grow"
                defaultValue={data?.email}
                disabled
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Phone:
              <input
                type="number"
                name="phone"
                placeholder="phone number"
                className="grow"
                defaultValue={data?.phone}
                required
              />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              Address:
              <input
                type="text"
                name="address"
                placeholder="address"
                className="grow"
                defaultValue={data?.address}
                required
              />
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-neutral" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
