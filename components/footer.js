import AiotSlogan from "./slogan"

function Footer() {
    return (<>
        <footer class="container-fluid p-4 text-center position-relative border-top border-secondary">
            <div class="d-flex flex-column align-items-center">
                <div>
                    <ul class="d-flex gap-3 list-unstyled">
                        <li><a href="#"><i class="fa-brands fa-facebook-f  fa-xl"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter fa-xl"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram  fa-xl"></i></a></li>
                    </ul>
                </div>
                <p className="text-muted">This Website is developed and maintained by AIot Team</p>

                <AiotSlogan></AiotSlogan>
            </div>

        </footer>
    </>)
}

export default Footer