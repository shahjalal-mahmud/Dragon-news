import { Link } from "react-router-dom";


const LoginPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className="font-semibold text-3xl text-center text-[#403F3F]">Login your account</h2>
                <div className="mt-8">
                    <hr className="border-gray-300 "></hr>
                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="bg-[#F3F3F3] input input-bordered rounded-[5px] placeholder:text-sm placeholder:text-[#9F9F9F]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-semibold text-xl text-[#403F3F]">Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="bg-[#F3F3F3] input input-bordered rounded-[5px] placeholder:text-sm placeholder:text-[#9F9F9F]" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white font-semibold text-xl">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-sm text-[#706F6F] text-center">
                    Dont’t Have An Account ? 
                    <Link to="/auth/register" className="text-[#F75B5F]"> Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;