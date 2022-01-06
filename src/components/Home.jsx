import Header from './Header';
import AccountForm from './AccountForm';
import Footer from './Footer';

export default function Home(props) {
    return (
        <div>
            <Header authUser={ props.auth } />
            <main className="bg-color">
                {/* TODO: Change this into a component */}
                <div key="main" className="container" style={{"display": "flex", "alignItems": "center", "width": "100%", "justifyContent": "center"}}>
                    <div className="card text-center w-50" style={{"margin": "100px 0"}}>
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100 active" id="loginTab" key="loginTab" data-bs-toggle="tab" data-bs-target="#login" 
                                        type="button" role="tab" aria-controls="login" aria-current="true">Login</button>
                                </li>
                                <li className="nav-item w-50">
                                    <button className="nav-link w-100" id="signUpTab" key="signUpTab" data-bs-toggle="tab" data-bs-target="#signup" 
                                        type="button" role="tab" aria-controls="signup" aria-current="false">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                        {/* TODO: Change into a component */}
                        <div className="card-body">
                            <div className="tab-content" id="tabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab"><AccountForm auth={ true }/></div>
                                <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab"><AccountForm auth={ false } /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Page Footer */}
            <Footer />
        </div>
    )
}