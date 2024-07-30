import login_background from '../public/istockphoto-1154958041-612x612.jpg'
import MainNavBar from "../components/navbar";
import Image from 'next/image'
function Login() {
    return (<>

        <div class="container">
            <div class="row gx-0">
                <div class="col-xl-4 col-lg-5 col-md-7  ps-4  mx-lg-0 mx-auto gx-0">
                    <figure class="text-center py-5">
                        <blockquote class="blockquote text-success">
                            <h1>AIOT</h1>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Agricultural Internet Of Things
                        </figcaption>
                    </figure>
                    <div class="card card-plain">
                        <div class="card-header pb-0 text-start ">
                            <figure>
                                <blockquote class="blockquote ">
                                    <h3>Sign In</h3>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Enter you Username  to sign in
                                </figcaption>
                            </figure>
                        </div>
                        <div class="card-body">
                            <form role="form">
                                <div class="mb-3">
                                    <input type="text" class="form-control form-control-lg" placeholder="Username" aria-label="Email" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="rememberMe" />
                                    <label class="form-check-label" for="rememberMe">Remember me</label>
                                </div>
                                <div class="text-center">
                                    <a href='/' type="button" class="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0">Sign in</a>
                                </div>
                            </form>
                            <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                <p class="mb-4 text-sm mx-auto">
                                    Don't have an account?
                                    <a href="/register" class="text-primary text-gradient font-weight-bold">Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                    <Image src={login_background}
                        class="bg-img rounded float-end position-absolute"
                        width={800} height={750}
                    />
                    <h3 class="mt-5 text-white font-weight-bolder position-relative">"Agriculture is the new currency"</h3>
                    <p class="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                </div>
            </div>
        </div>
    </>)
}
export default Login;