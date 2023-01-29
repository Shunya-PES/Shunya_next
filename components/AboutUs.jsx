import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import cubes from '../assets/cubes.json';
import Lottie from 'lottie-react';
import MemberComponent from '../components/MemberComponent';
import membersData from '../assets/members';
import Script from 'next/script';

const AboutUs = () => {
  const [meetTheTeam, setMeetTheTeam] = useState(false);

  return (
    <div className={` ${styles.home__about} w-[100%] inline-block p-[20px] `}>
      <Script
        src="https://kit.fontawesome.com/613f9f2474.js"
        crossorigin="anonymous"
      />
      <div className="flex flex-row align-center justify-center mb-[20px]">
        <span
          className={`${
            styles.home__abouttitle
          } font-sans text-center cursor-pointer transition duration-200 ease-in-out  ${
            meetTheTeam === false
              ? styles.home__abouttitle__clicked
              : styles.home__abouttitle
          } sm:text-[15px] md:text-[30px]`}
          onClick={() => {
            setMeetTheTeam(false);
          }}
        >
          About Shunya
        </span>
        <span
          className={`${
            styles.home__abouttitle
          } font-sans cursor-pointer transition ease-in-out duration-200 mx-[20px] ${
            meetTheTeam === true
              ? styles.home__abouttitle__clicked
              : styles.home__abouttitle
          } sm:text-[15px] md:text-[30px]`}
          onClick={() => {
            setMeetTheTeam(true);
          }}
        >
          Meet The Team
        </span>
      </div>

      {!meetTheTeam ? (
        <div className="flex flex-col lg:flex-row align-center justify-center  sm-mx-[50px] lg:mx-[100px] lg:my-[20px]">
          <div className={`${styles.home__aboutpara} lg:w-[1000px] `}>
            We are an analysis-driven and research-oriented club. We host fun
            activities and events related to a variety of branches of applied
            math.
            <br />
            <br />
            Shunya promises much more than just fun mathematics. We are a
            community of extraordinary youth joining together to develop their
            explorative, creative, and inventive skills. Shunya is a place to
            learn, explore, develop and research.
            <br />
            <br />
            We are on a journey to capture the beauty of mathematics in its true
            essence. The club is open to all those curious minds, to learn more
            about mathematics, regardless of their course or background.
          </div>
          <div className={`${styles.home__aboutcubes} self-center mt-[20px]`}>
            <Lottie
              loop={true}
              animationData={cubes}
              style={{ height: 250, width: 250, padding: 20 }}
            />
          </div>
        </div>
      ) : (
        // Members Container right here-- map the json data for all the members
        <div className="flex flex-col flex-wrap lg:flex-row align-center justify-center m-7">
          {membersData.map((member, index) => (
            <MemberComponent
              key={index}
              name={member.name}
              position={member.position}
              image_url={member.photo_link}
              linkedin_url={member.linkedin_profile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutUs;
