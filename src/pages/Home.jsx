import React, { useEffect, useState } from "react";
import apple from "/images/apple.svg";
import airpods from "/images/airpods.png";
import help from "/images/help.svg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowInfo(false);
    }, 5000);
    setTimeout(() => {
      setShowHelp(true);
    }, 20000);
  });
  const [number, setNumber] = useState(0);
  const sentences = [
    "Click here for receive your gift",
    "Are you sure?",
    "Confirm your order",
    "Are you really really sure?",
    "Try Again",
    "Unlock the magic of AirPods!",
    "Get ready for an extraordinary auditory experience!",
    "Confirmed, you'll be the king or queen of sound!",
    "You're really close to get your gift",
    "Keep trying",
    "Yes you are a champion",
    "Oops, almost done",
  ];
  const changeSentence = () => {
    setNumber((number + 1) % sentences.length);
  };
  return (
    <div>
      {showInfo ? (
        <div className="p-6 flex h-screen flex-col justify-center gap-4">
          <h1 className="border-b-2 pb-2 font-semibold">Instructions</h1>
          <div className="flex flex-col gap-2">
            <p className=" text-sm font-extralight text-zinc-400">
              Read carefully
            </p>
            <p className="font-bold">YOU HAVE 5 SECONDS</p>
            <p>
              Don't be fooled by appearances. The real key is closer than you
              think. Click in the right place and unveil the sound of the
              surprise.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8 flex flex-col gap-8">
          <div className="flex justify-between items-center relative">
            <img src={apple} alt="Apple logo" width="32px" />
            {showModal ? (
              <div className="absolute right-8 top-0 rounded-lg p-2 bg-zinc-200">
                If you are having trouble with the button, please be sure you
                have read the initial instructions. In case you haven't read
                them, you need to tap in the <b>OBJECT</b> you want :D
              </div>
            ) : null}
            {showHelp ? (
              <button onClick={() => setShowModal(!showModal)}>
                {" "}
                <img src={help} alt="help logo" width="24px" />
              </button>
            ) : null}
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <h1 className="font-semibold border-b-2 pb-2">
                AirPods Pro (2.ª generation)
              </h1>
            </div>
            <div className="flex flex-col h-[33rem] items-center justify-center gap-10 border-b-2">
              <a href="/secretform">
                <img src={airpods} alt="Airpods" />
              </a>
              <div className="flex flex-col gap-2 items-center">
                <span className=" rounded-full border-2 border-blue-400 w-12 h-12 flex items-center justify-center">
                  <span className="inner-circle"></span>
                </span>
                <h2 className=" text-zinc-600">White</h2>
              </div>
            </div>
            <button
              onClick={changeSentence}
              className=" border-2 border-zinc-600 rounded-lg p-2 text-zinc-600 hover:bg-[#101010] hover:text-white font-bold transition-all"
            >
              {sentences[number]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
