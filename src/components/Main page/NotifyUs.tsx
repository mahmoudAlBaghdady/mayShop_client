import React from 'react'

const NotifyUs = () => {
    return (
        <div className="subscribe-section bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-xs-10">
                <div className="subscribe-head">
                  <h2>DO you need more tips?</h2>
                  <p>Sign up free and get the latest tips.</p>
                  <form className="form-section p-auto">
                    <input placeholder="Your Email..." name="email" type="email" />
                    <input value="Yes. I want!" name="subscribe" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NotifyUs