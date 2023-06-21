import '../styles/Contact.css'

function Contact() {
    return (
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form>
                <h3>Drop Us a Message</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message"/>
                        </div>
                    </div>
                    <div className="col-md-6">  
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
