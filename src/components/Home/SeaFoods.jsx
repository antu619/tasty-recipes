import Food from "./Food";


const SeaFoods = ({seaFoods}) => {

    console.log(seaFoods)

    return (
        <div className="mt-16">
           <h2 className="text-3xl text-center font-semibold mb-16">Our Sea Foods</h2>
           <div className="grid lg:grid-cols-3 gap-5 lg:px-20 px-5">
            {
                seaFoods.slice(0,6).map(seaFood => <Food key={seaFood._id} seaFood={seaFood} />)
            }
           </div>
        </div>
    );
};

export default SeaFoods;