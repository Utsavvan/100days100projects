import './Cta.css';

const Cta = () => {
    return (
        <div className="cta">
          <div className="cta-line flexbox-def">
            Have a question or need more information about our personalized meal
            delivery service? <br /> Get in touch with us today and we'll be happy to
            help!
          </div>
          <div className="flexbox-def">
            <button className='cta-button'>Contact Us</button>
          </div>
        </div>
    )
}

export default Cta;