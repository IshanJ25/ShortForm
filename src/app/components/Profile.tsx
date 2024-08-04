'use client';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import kevin from '../images/Kevin.png';

type EditState = {
  languages: boolean;
  achievements: boolean;
  skills: boolean;
  education: boolean;
};

export default function Profile() {
  const [editing, setEditing] = useState<EditState>({
    languages: false,
    achievements: false,
    skills: false,
    education: false
  });

  const toggleEdit = (field: keyof EditState) => {
    setEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  return (
    <div className="min-h-screen bg-bgdefault flex flex-col items-start justify-start">
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className="bg-white shadow-md rounded-sm p-4 max-w-lg w-full ml-10 mb-4 mt-10">
        <div className="flex flex-col items-center">
          <div className="relative rounded-full h-24 w-24 mb-4">
            <Image src={kevin} alt="Kevin" layout="fill" objectFit="cover" className="rounded-full scale-125" />
          </div>
          <div className="text-lg font-semibold mb-1 text-textdarkblue">Kevin</div>
          <div className="w-full">
            <div className="text-textdarkblue text-left mt-10 mb-10">Creator Type</div>
            <div className="text-textdarkblue text-left mb-4">Followers</div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-sm p-4 max-w-lg w-full h-auto ml-10 mb-20">
        <div className="flex flex-col">
          <div className="border-t border-b border-gray-200 mt-4 pt-4 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-textdarkblue">Languages</span>
              <button className="text-textdarkblue" onClick={() => toggleEdit('languages')}>edit</button>
            </div>
            {editing.languages ? (
              <>
                <input type="text" defaultValue="Hindi" className="mb-2" />
                <input type="text" defaultValue="English" className="mb-2" />
                <input type="text" defaultValue="Gujarati" />
              </>
            ) : (
              <>
                <div className="text-gray-600">Hindi</div>
                <div className="text-gray-600">English</div>
                <div className="text-gray-600">Gujarati</div>
              </>
            )}
          </div>
          <div className="border-t border-b border-gray-200 mt-4 pt-4 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-textdarkblue">Achievements</span>
              <button className="text-textdarkblue" onClick={() => toggleEdit('achievements')}>edit</button>
            </div>
            {editing.achievements ? (
              <textarea className="w-full" defaultValue="List your achievements here..."></textarea>
            ) : (
              <div className="text-gray-600">List your achievements here...</div>
            )}
          </div>
          <div className="border-t border-b border-gray-200 mt-4 pt-4 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-textdarkblue">Skills</span>
              <button className="text-textdarkblue" onClick={() => toggleEdit('skills')}>edit</button>
            </div>
            {editing.skills ? (
              <textarea className="w-full" defaultValue="List your skills here..."></textarea>
            ) : (
              <div className="text-gray-600">List your skills here...</div>
            )}
          </div>
          <div className="border-t border-b border-gray-200 mt-4 pt-4 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-textdarkblue">Education</span>
              <button className="text-textdarkblue" onClick={() => toggleEdit('education')}>edit</button>
            </div>
            {editing.education ? (
              <textarea className="w-full" defaultValue="List your education here..."></textarea>
            ) : (
              <div className="text-gray-600">List your education here...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
