import React from 'react';
import linkedin from '../assets/linkedin.svg';
import Image from 'next/image';

const Member = ({ name, position, image_url, linkedin_url }) => {
  return (
    <div className='flex w-[350px] h-[500px] flex-col items-center justify-center rounded-[18px] border shadow-md border-gray-300 p-8 m-4 object-contain'>
      <Image src={image_url} alt='profile' height={100} width={100} />
      <div className='mt-8 text-center'>
        <h1 className='text-[40px] text-slate-900 font-sans font-medium'>
          {name}
        </h1>
        <h2 className='text font-sans font-medium mt-[10px]'>{position}</h2>
      </div>

      <a
        href={linkedin_url}
        className='cursor-pointer m-5 rounded-md transition ease-in-out delay-80 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100'
        target='_blank'
        rel='noreferrer'
      >
        <Image src={linkedin} alt='linkedin' height={40} />
      </a>
    </div>
  );
};

export default Member;
