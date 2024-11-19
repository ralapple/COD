import GeneralHeader from "./Header";

const RayProfile = () => {
    return (
        <div className="profile">
            <h3>Raymond (Ray) Lyon</h3>
            <ul>
                <li>Senior at University of Minnesota.</li>
            </ul>
        </div>
    )
};

const NateProfile = () => {
    return (
        <div className="profile">
            <h3>Nate Nelson</h3>
            <ul>
                <li>Senior at University of Minnesota.</li>
            </ul>
        </div>
    )
}


const AboutPage = () => {
    return (
        <div className="App">
            <GeneralHeader />
            <div>
                <h2>About the Authors</h2>
                <RayProfile />
                <NateProfile />
            </div>
        </div>
    )
};

export default AboutPage;