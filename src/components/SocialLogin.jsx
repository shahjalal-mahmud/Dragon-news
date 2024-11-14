import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl">Login With</h2>
            <div className="*:w-full py-4 space-y-2 ">
                <div className="btn text-sky-600 border-sky-600"><FaGoogle></FaGoogle>Login with Google</div>
                <div className="btn border-black"><FaGithub></FaGithub>Login with Github</div>
            </div>
        </div>
    );
};

export default SocialLogin;