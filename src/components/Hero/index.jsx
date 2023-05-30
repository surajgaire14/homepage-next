import React from "react";
import style from "../../app/styles/hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={style.hero__container}>
      <h1>Nagarjuna ICT Club</h1>
      <div className={style.hero__wrapper}>
        <div className={`flex ${style.herotext__wrapper}`}>
          <p className={`flex items-end ${style.hero__text}`}>
            Discover endless possibilities as we explore the dynamic world of
            Information and Communication Technology.
          </p>
        </div>
        <div className={style.images__container}>
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
          />
        </div>
        <div className={style.herotext__wrapper}>
          <p>
            Unlock your creativity, develop essential skills, and stay ahead of
            the curve in this rapidly evolving digital era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
