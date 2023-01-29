import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
const Member = ({ name, position, image_url, linkedin_url }) => {
  return (
    <div className={`${styles.member_card} ${styles.d1} mx-[20px] my-[50px]`}>
      <Image
        src={`${image_url}`}
        alt='profile'
        width={600}
        height={800}
        className='object-cover'
      />
      <div className={`${styles.d1__overlay1}`}>
        <div
          className={`${styles.d1__overlay1__title} font-sans text-[25px] md:text-[40px] `}
        >
          {name}
          <h6 className='md:text-[25px] text-[15px] font-sans my-[10px]'>
            {position}
          </h6>
        </div>
      </div>
      <div className={styles.d1__overlay2}>
        <div className={styles.d1__overlay2__social}>
          <a href={linkedin_url} target='_blank' rel='noreferrer'>
            <i
              className={`${styles.fa} fa fa-linkedin-square ${styles.fa_linkedin_square}`}
              aria-hidden='true'
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Member;
