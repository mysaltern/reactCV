import './index.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    alert(1);
    e.preventDefault()


    emailjs.sendForm('service_ipzo6v1', 'template_x0rwirx', form.current, 'fw14QeI9pkoULkSaW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


  }


  return (
    <>
      <div className="container home-page">

        <section className="mb-4">

          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>

          <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">


              <form ref={form} onSubmit={sendEmail}>

                <div className='row' >
                  <div className='col-md-6'>
                    <label>Name</label>
                    <input type="text" name="user_name" />


                  </div>
                  <div className='col-md-6'>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                  </div>
                </div>
                <br />
                <label>Message</label>
                <textarea rows="3" name="message" />
                <hr/>
                <input type="submit"  className="btn btn-primary" value="Send" />
              </form>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Christchurch, Canterbury, New Zealand</p>
                </li>


                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>mysaltern@gmail.com</p>
                </li>
              </ul>
            </div>

          </div>

        </section>



      </div>
    </>
  )
}

export default Contact