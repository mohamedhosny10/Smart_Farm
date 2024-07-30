import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
function MainNavBar() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <>

            <nav class="navbar navbar-expand-lg container-fluid px-0 mx-4 shadow-none py-3 border-radius-xl" id="navbarBlur" data-scroll="false">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="#navBar">
                        <Link href='/' class={(router.pathname == "/" ? " active " : "") + "btn btn-outline-light me-3"}> Dashboard </Link>
                        <Link href='/disease_detection' class={(router.pathname == "/disease_detection" ? " active " : "") + "btn btn-outline-light me-3"}>Disease detection</Link>
                        <Link href='/water_quality' class={(router.pathname.includes("/water_quality") ? " active " : "") + "btn btn-outline-light me-3"} >Water Quality </Link>
                    </div>
            </nav>
        </>
    )
}
export default MainNavBar;