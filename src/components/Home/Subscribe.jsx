

const Subscribe = () => {
    return (
        <div className="grid gap-2 lg:grid-cols-4 justify-evenly items-center bg-base-200 mx-20 my-16 py-3 p-2">
            <p>Subscribe to get my secret recipes</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn w-full max-w-xs bg-[#eb5757] hover:bg-[#eb5757] text-white">Subscribe</button>
        </div>
    );
};

export default Subscribe;