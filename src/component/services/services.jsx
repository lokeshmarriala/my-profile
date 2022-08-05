import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container service__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>Hobbies</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Sketching</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Music</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Movies</p>
          </li>
          {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li> */}
        </ul>
      </article>
      {/*end of ui ux*/}
      <article className='service'>
        <div className='service__head'>
          <h3>Achievments</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>GFG pratice rank top 30 in campus</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Leetcode code 100+ problems</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Codechef highest rank 1684</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>2nd againts 1000+ in DBS Hackathon</p>
          </li>
          {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li> */}
        </ul>
      </article>
      {/* end of web services*/}
      <article className='service'>
        <div className='service__head'>
          <h3>Responsiblities</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lead Member of cybernautes club(CVR, Hyderabad)</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Campus brand Ambassdor placment(Bits Pilani, Hyderabad)</p>
          </li>
          {/* <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>iuchisdhihcs</p>
          </li> */}
        </ul>
      </article>
      {/*content creation*/}
    </div>
    </section>
  )
}

export default services