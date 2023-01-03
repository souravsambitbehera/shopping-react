import "./netflix-header.css";
export function NetflixHeader() {
  return (
    <div className="header">
        <div>
            <div className="brand-title">Netflix</div>
        </div>
        <div>
            <div className="input-group">
                <span className="bi bi-globe input-group-text"></span>

                <select name="" id="" className="form-select">
                    <option value="">language</option>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
                <div className="ms-4">
                <button className="btn btn-danger">Signin</button>
                </div>
            </div>
        </div>
      
    </div>
  );
}
