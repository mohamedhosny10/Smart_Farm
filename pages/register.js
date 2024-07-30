import register_background from '../public/glenn-carstens-peters-2E_dT65fyxo-unsplash.jpg'
import Image from 'next/image'
function Register() {
    return (<>
        <div class="page-header" >
            <Image src={register_background}
                class="bg-img rounded w-100 h-50"
                fill
            />
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container">
                <div class="row justify-content-center position-relative">
                    <figure class="text-center py-5">
                        <blockquote class="blockquote text-success">
                            <h1>AIOT</h1>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Agricultural Internet Of Things
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                    <div class="card">
                        <div class="card-header text-center  pt-4">
                            <h4>Create a new account</h4>
                        </div>
                        <div class="row px-xl-5 px-sm-4 px-3">
                            <div class="mt-2 position-relative text-center">
                            </div>
                        </div>
                        <div class="card-body">
                            <h4 class="text-center text-muted pt-2 pb-4">Please Fill the following data</h4>
                            <form role="form">
                                <div class="row">
                                    <div class="col mb-3">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Username" aria-label="User name" />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" />
                                </div>
                                <div class="text-center">
                                    <a href ="\login" type="button" class="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0">Sign Up</a>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Register