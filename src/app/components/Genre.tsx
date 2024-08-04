import Image from 'next/image';
import Gaming from '../images/GamingPng.png';
import Cooking from '../images/Cooking.png';
import Academics from '../images/Academics.png';
import Filmmaking from '../images/FilmMaking.png';
import Politics from '../images/Politics.png';

export default function Genre() {
    return (
      <div className="flex justify-center items-center relative p-8 mt-14 pb-16">
        <div className="absolute top-0 left-11 p-2 text-left">
          <h1 className="text-4xl font-inter text-textdarkblue">Genre</h1>
        </div>
        <div className="flex space-x-12 mt-8">
          {[
            { img: Gaming, title: 'Gaming' },
            { img: Cooking, title: 'Cooking' },
            { img: Academics, title: 'Academics' },
            { img: Filmmaking, title: 'Filmmaking' },
            { img: Politics, title: 'Politics' }
          ].map((genre, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden w-48 h-52 bg-white border border-gray-300">
              <Image src={genre.img} alt={genre.title} layout="fill" objectFit="cover" className="rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                <span className="text-white text-lg font-bold">{genre.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }