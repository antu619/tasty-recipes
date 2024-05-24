import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error.status, error.error.message)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
            <h1 className=" text-7xl font-semibold text-error">Oops!</h1>
            <h2 className="text-xl font-semibold mt-5 mb-3">Sorry, an unexpected error has been occurred.</h2>
            <p className="text-lg font-semibold">{error.status} - {error.error.message}</p>
            <Link to="/" className="btn btn-neutral mt-5">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;