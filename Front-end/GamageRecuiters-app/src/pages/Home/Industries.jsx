import data from "../../data/index.json";

export default function Industries() {
    return (
        <section className="industries--section" id="Industries">
            <div className="testimonial--container">
                <h2 className="industries--section--heading">INDUSTRIES</h2>
            </div>
            <div className="industries--section--container">
                {data?.industries?.map((item, index) => (
                    <div key={index} className="industries--section--card">
                        <div className="industries--section--card--content">
                            <h3 className="industries--section--title">{item.title}</h3>
                            <p className="industries--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}