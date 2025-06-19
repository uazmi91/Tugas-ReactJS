import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team() {
    return (
        <>
            
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Our Team</h2>
                    <div className="row text-center">
                        {/* Team Member 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="card-text text-muted">CEO & Founder</p>
                                    <p>John is the visionary behind the platform and leads the company with innovation.</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">Jane Smith</h5>
                                    <p className="card-text text-muted">Lead Developer</p>
                                    <p>Jane is responsible for the technical development and platform stability.</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">Michael Lee</h5>
                                    <p className="card-text text-muted">Marketing Head</p>
                                    <p>Michael handles all marketing strategies and user engagement campaigns.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
