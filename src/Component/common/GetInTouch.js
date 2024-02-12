
function GetInTouch() {
    return (
        <>
            <div className="getInTouch">
                <div className="col-md-6">
                    <div className="contact-wrap">
                        <h3>Get In Touch</h3>
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="map" class="colorlib-map">
                        <iframe
                            title="google-map"
                            width="600"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/`}
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch