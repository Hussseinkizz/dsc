import React from 'react';
import AppBar from '../components/AppBar';

const Projects = () => {
  const projectsData = [
    {
      name: 'Threadit',
      date: '2019 - 2022',
      about: 'Threadit is a tool for recording and sharing short videos.',
      tag: 'mobile app',
      members: 10,
    },
    {
      name: 'FoodFrenzy',
      date: '2020 - 2023',
      about:
        'A web app for finding2019 - 2022 and sharing recipes with friends.',
      tag: 'web app',
      members: 8,
    },
    {
      name: 'FitPal',
      date: '2019',
      about:
        'A mobile app for tracking fitness goals and connecting with workout buddies.',
      tag: 'mobile app',
      members: 6,
    },
    {
      name: 'TimeTracker',
      date: '2020',
      about:
        'A desktop app for freelancers or remote workers to track their time and create invoices.',
      tag: 'desktop app',
      members: 4,
    },
    {
      name: 'CodeConnect',
      date: '2022 - 2023',
      about:
        'A social network for coders to connect with each other and share code snippets.',
      tag: 'web app',
      members: 12,
    },
    {
      name: 'HomeHero',
      date: '2023',
      about:
        'A smart home automation system that connects with various devices and can be controlled through a mobile app.',
      tag: 'IoT',
      members: 10,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <AppBar />
      <section className="w-full flex flex-col justify-start items-center pt-16">
        <h1 className="font-semibold text-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-4 py-2">
          The Projects By DSC Comunity
        </h1>
        {/* The Projects Wrapper */}
        <div className="w-full md:w-4/5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          {projectsData.map((project) => (
            <div className="flex w-full justify-center items-center gap-4 flex-col capitalize border border-slate-300 rounded-lg p-2 shadow">
              <h1 className="font-semibold">{project.name}</h1>
              <span className="flex text-indigo-500 px-2 py-2 rounded-lg bg-purple-300 justify-center items-center gap-2">
                {project.tag}
              </span>
              <div className="flex gap-2">
                <span className="flex">Date: {project.date}</span>
                <span className="flex">Members: {project.members}</span>
              </div>
              <p className="flex">{project.about}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
