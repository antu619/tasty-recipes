import { useEffect, useState } from "react";
import Food from "./Food";


const SeaFoods = () => {
    
    const [seaFoods, setSeaFoods] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/seaFoods`)
        .then(res => res.json())
        .then(data => setSeaFoods(data))
    }, [])

    return (
        <div className="mt-16">
           <h2 className="text-3xl text-center font-semibold mb-16">Our Sea Foods</h2>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5">
            {
                seaFoods?.slice(0,6).map(seaFood => <Food key={seaFood._id} seaFood={seaFood} />)
            }
           </div>
        </div>
    );
};

export default SeaFoods;