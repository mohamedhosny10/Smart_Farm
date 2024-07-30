import { Main } from "next/document";
import ComingSoon from "../components/coming_soon";
import MainNavBar from '../components/navbar'
function DiselPump(){
    return(<>
        <div>
        <div class="h-25 bg-success position-absolute w-100"></div>
        <MainNavBar></MainNavBar>
        <ComingSoon/>
        </div>
        </>)
}
export default DiselPump;