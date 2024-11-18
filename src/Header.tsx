import { useNavigate } from "react-router-dom";

const GeneralHeader = () => {
    const navigate = useNavigate();
    return <div className="generalHeader">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/citations")}>Citations</a>
        <a onClick={() => navigate("/timeline")}>Timeline</a>
        <a onClick={() => navigate("/about")}>About</a>
    </div>
}

export default GeneralHeader;