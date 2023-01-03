import './login.component.css';
export function LoginComponent () {
    return (
        <div id="form-container" className="container-fluid">
            <form action="">
                <h1> <span className="bi bi-person-fill"></span> Login Form</h1>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="form-label">Password</label>
                    <div>
                        <input type="password" className="form-control"/>
                    </div>
                </div>
                <div className="mb-2">
                    <button className="btn btn-primary w-100">LOGIN</button>
                </div>
            </form>
        </div>
    )
}