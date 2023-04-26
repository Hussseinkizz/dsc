import React from 'react';
import AppBar from '../components/AppBar';

import image1 from '../assets/img/community/asa_lugada.png';
import image2 from '../assets/img/community/elijah_okello.png';
import image3 from '../assets/img/community/halimah_bukirwa_QsL8qhD.png';
import image4 from '../assets/img/community/janet_namutebi.png';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';

const Community = () => {
  const communityMembers = [
    {
      id: '1k2k',
      name: 'Asa Lugada',
      role: 'GDG Organizer',
      photo: image1,
    },
    {
      id: '3j2j',
      name: 'Janet Namutebi',
      role: 'DFCU Bank - Software Engineer',
      photo: image4,
    },
    {
      id: '2j2j',
      name: 'Halimah Bukirwa',
      role: 'Alfajiri Innovations Limited - Co-Organizer',
      photo: image3,
    },
    {
      id: '1e2k',
      name: 'Elijah Okello',
      role: 'Co-Organizer',
      photo: image2,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <AppBar />
      <section className="w-full flex flex-col justify-start items-center pt-16">
        <h1 className="font-semibold text-xl">Meet The Community</h1>
        {/* The Profiles Wrapper */}
        <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-4">
          {communityMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col gap-2 justify-center items-center">
              <div className="flex w-32 h-32">
                <img
                  src={member.photo}
                  alt="community member photo"
                  className="rounded-full w-full"
                />
              </div>
              <h1 className="font-semibold">{member.name}</h1>
              <p className="flex text-sm text-slate-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Community;
