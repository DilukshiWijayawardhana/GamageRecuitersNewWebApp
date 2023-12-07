import { MDBBtn } from 'mdb-react-ui-kit';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, We Are</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color" style={{ color: 'hsl(217, 68%, 53%, 1)' }}>GAMAGE</span>{" "}
                        <br />
                        Recruiters
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <br /> Dolorum, quas. Amet soluta assumenda cum?
                    </p>
                </div>
                <MDBBtn outline className='w-30 mb-4 ' size='md' style={{ fontSize: '1rem' }}>View All Jobs</MDBBtn>
            </div>
            <div className="hero--section--img">
                <img src="./img/Hero.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
}