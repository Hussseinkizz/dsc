import React from 'react';
import AppBar from '../components/AppBar';

import imageSample from '../assets/img/events-image.jpg';
import eventImage1 from '../assets/img/ai.jpg';
import eventImage2 from '../assets/img/associate.jpg';
import eventImage3 from '../assets/img/people-coding-together.png';

const pastEvents = [
  {
    eventName: 'Ai For All',
    description:
      'Getting started with ai, real world use cases and how to train your own...',
    date: 'Jan 21 2023',
    image: eventImage1,
    venue: 'Up Hall Stadium',
  },
  {
    eventName: 'Women In Tech Community Gathering',
    description: 'Meet women who inspre and are changing the tech community.',
    date: 'Feb 02 2023',
    image: eventImage3,
    venue: 'Campus Hall',
  },
  {
    eventName: 'Exploring Opportunities In Tech',
    description: 'Getting your foot in the door!',
    date: 'Mar 20 2023',
    image: eventImage2,
    venue: 'Campus Hall',
  },
];

const Events = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <AppBar />
      <section className="w-full flex flex-col justify-start items-center pt-16">
        {/* The Events Hero Section */}
        <div className="w-full flex flex-col md:flex-row">
          {/* The left side */}
          <div className="w-full flex flex-col p-4 gap-2">
            <h1 className="font-semibold">Featured events</h1>
            <h3 className="text-fuchsia-600">DSC UCU Community Meetup 2023</h3>
            <h4 className="foo">April 30 | Virtual</h4>
            <p className="flex w-1/2">
              Explore the latest innovations at our flagship event. <br />
              Tune in to watch the live-streamed keynotes and explore more than
              100 technical sessions on demand.
            </p>
            <p className="flex text-fuchsia-600">#TheYouthChapter</p>
            <button className="flex w-fit py-2 px-4 bg-black rounded-lg text-indigo-200 transition hover:text-indigo-300">
              Register Now
            </button>
          </div>
          {/* The right side */}
          <div className="w-full flex">
            <img
              className="w-full flex h-[500px] rounded-lg"
              src={imageSample}
              alt="people sitting together in tech event"
            />
          </div>
        </div>
        <section className="flex flex-col w-full px-4 mt-4">
          <h1 className="font-bold text-xl my-4">Past Events</h1>
          {/* The Event Cards */}
          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3">
            {pastEvents.map((event) => (
              <div className="flex flex-col justify-between items-start gap-2 w-full shadow bg-slate-100">
                <img src={event.image} alt="" />
                <h3 className="font-semibold px-2 text-xl capitalize">
                  {event.eventName}
                </h3>
                <h3 className="font-semibold flex justify-start items-center gap-4 text-fuchsia-600 px-2">
                  <span className="flex">{event.venue}</span>
                  <span className="flex">{event.date}</span>
                </h3>
                <p className="px-2 py-2">{event.description}</p>
                <button className="flex w-full py-2 px-4 bg-slate-800 text-slate-500">
                  Registration No Longer Available!
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Spacer Div Hack */}
      <div className="flex w-full h-full flex-auto min-h-16"></div>
      {/* The Footer */}
      <footer className="flex w-full justify-center items-center gap-4 px-4 py-2 bg-slate-800 text-slate-600">
        &copy; DSC UCU Community 2023
      </footer>
    </div>
  );
};

export default Events;
