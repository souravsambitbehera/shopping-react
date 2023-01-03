import { NetflixHeader } from "../netflix-header/netflix-header";
import { NetflixMain } from "../netflix-main/netflix-main";
import "./netflix-index.css";
export function NetflixIndex () {
    return (
        <div id="banner">
            <div id="shade">
                <NetflixHeader/>
                <main>
                    <div>
                        <NetflixMain />
                    </div>
                </main>

            </div>

        </div>
    )
}