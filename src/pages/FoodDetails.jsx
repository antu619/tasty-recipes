import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {

    const food = useLoaderData();

    const {name, imgUrl, price, description} =  food;

    return (
        <div className="my-16">
            <h2 className="text-3xl text-center font-semibold mb-16">Food Details</h2>
            <div className="lg:flex gap-10 lg:mx-20 mx-5">
                <img className="w-[384px]" src={imgUrl} alt="Food Image" />
                <div className="lg:mt-0 mt-5">
                <h2 className="text-4xl font-semibold"><span className="font-bold">Name:</span> {name}</h2>
                <h4 className="text-xl font-semibold text-gray-500 my-3"><span className="font-bold text-black">Price: </span> ${price}</h4>
                <p className="text-xl"><span className="font-bold">Description:</span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;