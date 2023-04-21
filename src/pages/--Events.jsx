import React, { useState } from 'react';
import '../styles/event.css';
import { RegisterForEventForm } from '../components/RegisterForEventForm';
// import { MyForm } from './Forms';

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const closeModal = (val) => {
    setShowForm(val);
  };
  return (
    <div className="event-wrapper">
      <h2>UpComing Events</h2>
      <div className="section">
        <div className="sub">
          <h3>Developers' Webinar 2023</h3>
          <h4>April 5|Virtual</h4>
          <img src="../assets/img/webnr.jpg" />
          <p>
            Online seminar that allows participanta from anywhere in the world
            to come together in a virtual classroom.
          </p>
          <button className="next">Register</button>
        </div>

        <div className="sub">
          <h3>Artificial Intelligence</h3>
          <h4>April 7|Virtual</h4>
          <img src="../assets/img/colab.jpg" />
          <p>
            Communicate more Effectively with AI Business Stakeholders and
            Enhance team performance
          </p>
          <button className="next">Register</button>
        </div>

        <div className="sub">
          <h3>Virtual Reality</h3>
          <h4>May 11|Virtual</h4>
          <img src="../assets/img/ai.jpg" />
          <p>
            Simulated experience that employs pose tracking and 3D near-eye
            displays to give the user immersive feel of virtual world.
          </p>
          <button className="next">Register</button>
        </div>
      </div>

      <div className="section">
        <div className="sub">
          <h3>Google for Startups Accelerator UK</h3>
          <h4>Applications are open till May 20</h4>
          <img src="../assets/img/associate.jpg" />
          <p>
            Great opportunity for supporting technology startups that are in the
            feild of AI and Ml
          </p>
          <button className="next">Register</button>
        </div>

        <div className="sub">
          <h3>Women In Tech</h3>
          <h4>June 7|Virtual</h4>
          <img src="../assets/img/network.jpg" />
          <p>
            Empowering young ladies to join the Tech canvas.Come show your
            potential.
          </p>
          <button className="next">Register</button>
        </div>

        <div className="sub">
          <h3>Developer Seminar</h3>
          <h4>Sept 11|Physical</h4>
          <img src="../assets/img/meetup.jpg" />
          <p>
            Are you a developer? Come be part of us, share ideas, gain skills
            and get opportunities.
          </p>
          <button className="next">Register</button>
        </div>
      </div>
      <h2 className="past">Directory of past events</h2>
      <div className="main">
        <div className="section1">
          <div className="list">
            <ul>
              <h3 className="style">2023</h3>
              <li>Feb 13, 2023</li>
              <li>Feb 20, 2023</li>
              <li>Feb 13, 2023</li>
              <li>Feb 13, 2023</li>

              <h3 className="style">2022</h3>
              <li>Feb 13, 2022</li>
              <li>Feb 13, 2022</li>
              <li>Feb 13, 2022</li>

              <h3 className="style">2021</h3>
              <li>Feb 13, 2021</li>
              <li>Feb 13, 2021</li>
              <li>Feb 13, 2021</li>
            </ul>
          </div>
        </div>

        <div className="section1">
          <div className="list">
            <ul>
              <h3 className="style">Event</h3>
              <li>Android day on Google open source Live</li>
              <li>February Founder Fridays</li>
              <li>Google for startups accelerator Canada</li>
            </ul>

            <ul>
              <h3 className="style">Event</h3>
              <li>Android day on Google open source Live</li>
              <li>February Founder Fridays</li>
              <li>Google for startups accelerator Canada</li>
            </ul>

            <ul>
              <h3 className="style">Event</h3>
              <li>Android day on Google open source Live</li>
              <li>February Founder Fridays</li>
              <li>Google for startups accelerator Canada</li>
            </ul>
          </div>

          <div className="section1">
            <div className="list">
              <ul>
                <h3 className="style">Products</h3>
                <li>Multi-product</li>
                <li>Open Souce</li>
                <li>Flutter</li>
              </ul>

              <ul>
                <h3 className="style">Products</h3>
                <li>Multi-product</li>
                <li>open source</li>
                <li>Flutter</li>
              </ul>

              <ul>
                <h3 className="style">Products</h3>
                <li>Multi-product</li>
                <li>open Source</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="section1">
              <div className="list">
                <ul>
                  <h3 className="style">Location</h3>
                  <li>Global</li>
                  <li>Cloud</li>
                  <li>Global</li>
                </ul>

                <ul>
                  <h3 className="style">Location</h3>
                  <li>Global</li>
                  <li>Global</li>
                  <li>Global</li>
                </ul>

                <ul>
                  <h3 className="style">Location</h3>
                  <li>India</li>
                  <li>Global</li>
                  <li>Global</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The Register Form */}
      {showForm && <RegisterForEventForm />}
    </div>
  );
}
