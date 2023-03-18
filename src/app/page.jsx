"use client";
/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Footer, Header, ThemeBtn } from "./common";
import Image from "next/image";
import validator from "validator";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import heroImg from "./assets/hero.png";
import logo from "./assets/logo.png";
import phone from "./assets/Phone.svg";

function page() {
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!userData.name || !userData.email) {
      setError("Please fill all the fields!!!");
      setLoading(false);
    } else if (!validator.isEmail(userData.email)) {
      setError("Please enter a valid email!!!");
      setLoading(false);
    } else if (userData.name.length < 3) {
      setError("Name should be atleast 3 characters long!!!");
      setLoading(false);
    } else if (!/^[A-Za-z\b]+$/.test(userData.name)) {
      setError("Please enter only alphabetical characters");
      setLoading(false);
    } else {
      fetch("https://vocallybackend.cyclic.app/api/v1/user", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Successfully Subscribed", {
              position: "top-center",
              autoClose: 3000,
              theme: "dark",
            });
            setLoading(false);
            setUserData({ name: "", email: "" });
          } else if (response.status === 400) {
            toast.error("User Already Exists!", {
              position: "top-center",
              autoClose: 3000,
              theme: "dark",
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
          setLoading(false);
        });
    }
  };

  return (
    <div className="bg-[#0F141D] pt-8">
      <Header />
      <ToastContainer />
      {/* Hero */}
      <div className="hero flex flex-col items-center py-16 px-[5%]">
        <div className="hero_top flex-col lg:flex lg:flex-row">
          <div className="hero_left lg:w-[40%]">
            <h1 className="text-gray-300 text-[38px] font-bold md:text-left text-center">
              Vehicle Maintenance From The Comfort of Your Home
            </h1>
            <p className="text-gray-400 text-sm mt-4 md:text-left text-center">
              Open Auto Soothes the hassle of maintaining your vehicle and helps
              you deal with unexpected repairs worry-free.
            </p>
            <form
              className="flex flex-col md:items-start items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter Your Name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="border-[1px]  border-gray-700 rounded-full lg:w-[60%] px-4 py-2 mt-12 bg-transparent w-[100%] 
                text-white
                placeholder:text-gray-500 focus:outline-purple-500"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                className="border-[1px] 
                text-white
                border-gray-700 rounded-full lg:w-[60%] px-4 py-2 mt-4 bg-transparent placeholder:text-gray-500 focus:outline-purple-500 w-[100%]"
              />
              {loading ? (
                <ThemeBtn title="Submitting..." theme="light" />
              ) : (
                <ThemeBtn title="Submit" theme="dark" />
              )}
            </form>
          </div>
          <div className="hero_right md:mt-0 mt-12">
            <Image className="levitate" src={heroImg} alt="hero" width={700} />
          </div>
        </div>
        <div className="hero_footer mt-6 flex items-center relative w-[100%] justify-center">
          <a href="#cta_container">
            <Image
              className="hover:rotate-180 transition-all duration-300 ease-in-out lg:block hidden"
              src={logo}
              height={50}
              width={50}
              alt="logo"
            />
          </a>
          <div className="social_links flex gap-3 lg:absolute right-5">
            <FaFacebookF
              className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
              size={20}
            />
            <FaTwitter
              className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
              size={20}
            />
            <FaYoutube
              className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
              size={20}
            />
            <FaLinkedin
              className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
              size={20}
            />
            <FaInstagram
              className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        id="cta_container"
        className="cta_container bg-gradient-to-br from-[#161A24] to-[#0F1319] flex px-[5%] items-center py-16 gap-20 lg:flex-row flex-col-reverse"
      >
        <div className="cta_left">
          <Image
            className="rounded-xl shadow-2xl levitate"
            src={phone}
            height={500}
            width={500}
            alt="phone"
          />
        </div>
        <div className="cta_right lg:w-[50%] flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-5xl text-gray-300 font-bold lg:w-[50% lg:text-left text-center">
            Focused on Time Saving
          </h2>
          <p className="text-gray-500 my-6 lg:mt-6 lg:mb-2 lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
            placeat labore maxime nihil, deserunt nostrum? Corrupti, accusantium
            pariatur? Quos veniam, nostrum recusandae repellat natus ipsa facere
            dolore eos cum culpa, veritatis error! Magnam sint neque earum
            repellat veniam ducimus maiores sunt cum velit similique. Facilis
            hic, ipsam,
          </p>
          <ThemeBtn title="Download the Mobile App" theme="dark" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default page;
