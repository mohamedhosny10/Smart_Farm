import Link from "next/link";
import AiotSlogan from "../slogan";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


function SideNav() {
    const router = useRouter()
    console.log(router.asPath)
    return (<>
        <form class=" col-3 d-flex flex-column  mt-2 border bg-white rounded-4 vh-100 shadow-lg bg-light">
            <AiotSlogan></AiotSlogan>
            <hr></hr>

            <Link href="1" class={(router.asPath == "/water_quality/sensors/1" ? " active " : "") + "btn me-3 mt-2"} > <i class="fa fa-microchip me-2"></i>
                Sensor - 1
            </Link>
            <Link href="2" class={(router.asPath == "/water_quality/sensors/2" ? " active " : "") + "btn me-3 mt-2"}> <i class="fa fa-microchip me-2"></i>
                Sensor - 2
            </Link>
            <Link href="3" class={(router.asPath == "/water_quality/sensors/3" ? " active " : "") + "btn me-3 mt-2"} > <i class="fa fa-microchip me-2"></i>
                Sensor - 3
            </Link>
            <Link href="4" class={(router.asPath == "/water_quality/sensors/4" ? " active " : "") + "btn me-3 mt-2"} > <i class="fa fa-microchip me-2"></i>
                Sensor - 4
            </Link>
            <Link href="5" class={(router.asPath == "/water_quality/sensors/5" ? " active " : "") + "btn me-3 mt-2"} > <i class="fa fa-microchip me-2"></i>
                Sensor - 5
            </Link>
        </form>
    </>)
}
export default SideNav;