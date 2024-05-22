

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-88px)]">
            <h2 className="text-7xl font-bold">L</h2>
            <div className="w-12 h-12 border-8 border-dashed border-error rounded-full animate-spin mt-5"></div>
            <h2 className="text-7xl font-bold">ading...</h2>
        </div>
    );
};

export default Loading;