import React from 'react'
import './style/testimonials.scss'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="heading">What students <span>speak about us</span></div>

        <div className="testimonial-container">

            {/* Testimonial 1 */}
            <div className="testimonial">
                <div className="testimonial-header">
                    <div className="testimonial-avatar">
                        <img src="//unsplash.it/100/100?10" alt="testimonial" />
                    </div>
                    <div className="testimonial-info">
                        <h3>Jatin Bajaj</h3>
                        <h4>Student</h4>
                    </div>
                </div>
                <div className="testimonial-desc">
                    It was a wonderful experience for me, the Athenahack hackathon was very well organized, and after shortlisting, I got a referral for an internship at Shiprocket. I am feeling super excited and delighted that I am able to get such a good offer and wan...
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial">
                <div className="testimonial-header">
                    <div className="testimonial-avatar">
                        <img src="//unsplash.it/100/100?10" alt="testimonial" />
                    </div>
                    <div className="testimonial-info">
                        <h3>Jatin Bajaj</h3>
                        <h4>Student</h4>
                    </div>
                </div>
                <div className="testimonial-desc">
                    It was a wonderful experience for me, the Athenahack hackathon was very well organized, and after shortlisting, I got a referral for an internship at Shiprocket. I am feeling super excited and delighted that I am able to get such a good offer and wan...
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial">
                <div className="testimonial-header">
                    <div className="testimonial-avatar">
                        <img src="//unsplash.it/100/100?10" alt="testimonial" />
                    </div>
                    <div className="testimonial-info">
                        <h3>Jatin Bajaj</h3>
                        <h4>Student</h4>
                    </div>
                </div>
                <div className="testimonial-desc">
                    It was a wonderful experience for me, the Athenahack hackathon was very well organized, and after shortlisting, I got a referral for an internship at Shiprocket. I am feeling super excited and delighted that I am able to get such a good offer and wan...
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials