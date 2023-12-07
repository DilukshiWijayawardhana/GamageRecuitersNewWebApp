import data from "../../data/index.json";

export default function Partners() {
    return (
        <section className="partners--section" id="partners">
            <div className="portfolio--container">
                <h2 className="partners--section--heading">Partners</h2>
            </div>
            <div className="partners--section--container">
                {data?.partners?.map((item, index) => (
                    <div key={index}>
                        <div className="partners--section--img">
                            <img src={item.src} alt="Product Chain" width="185" height="150" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
