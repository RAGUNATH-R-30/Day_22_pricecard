import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

//Card component
function Mycard({ data }) {
    return (
        <div className='col-lg-4'>
            <div className="card" style={{ width: "300px" }}>
                <div className="card-body">
                    <p style={{ textAlign: "center", color: "grey" }}>{data.plan}</p>
                    <h2 className="card-title" style={{ textAlign: "center" }}>${data.price}/month</h2>
                    <ul className="list-unstyled">
                        {
                            data.features.map((item, index) => {
                                return <li key={index}>
                                    {
                                        item.enable ? (<p><span><TiTick />{item.name}</span></p>) : (<p style={{ color: "grey" }}><span><RxCross2 />{item.name}</span></p>)
                                    }
                                </li>
                            })
                        }
                    </ul>
                    <button type="button" className="btn btn-primary" style={data.buttonfocus ? { width: "100%", backgroundColor: "#007aff", borderRadius: "20px", border: "none", padding: "10px" } : { width: "100%", backgroundColor: "#4ba2ff", borderRadius: "20px", border: "none", padding: "10px" }}>BUTTON</button>
                </div>
            </div>
        </div>
    );
}
export default Mycard;