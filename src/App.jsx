import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'
function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(()=>{
    let tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    })
  })

  useGSAP(()=>{

    if(!showContent) return


    gsap.to(".main",{
      rotate: 0,
      scale: 1,
      duration:2,
      delay: "-1",
      ease: "Expo.EaseInOut"
     
    })
    gsap.to(".sky",{
      rotate: 0,
      scale: 1.2,
      duration:2,
      delay: "-0.8",
      ease: "Expo.EaseInOut"
     
     
    })
    gsap.to(".bg",{
      rotate: 0,
      scale: 1.2,
      duration:2,
      delay: "-0.8",
      ease: "Expo.EaseInOut"

    })
    gsap.to(".character",{
      rotate: 0,
      scale: 1.8,
      x: "-50%",
      bottom: "-20%",
      duration:2,
      delay: "-0.8",
      ease: "Expo.EaseInOut"

    })
    gsap.to(".text",{
      rotate: 0,
      scale: 1,
      duration:2,
      delay: "-0.8",
      ease: "Expo.EaseInOut"

    })



    let main = document.querySelector(".main")

    main?.addEventListener("mousemove", (e)=>{
      const xmove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".photosdiv .text",{
        x: xmove
      })

      gsap.to(".sky",{
        x: xmove
      })

      gsap.to(".bg",{
        x: `${xmove * 1.5}`
      })

    })


  },[showContent])
  



  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
        </div>

        {showContent && (
            <div className='main w-full overflow-hidden rotate-[-10deg] scale-[1.6] '>
            <div className='landing w-full h-screen bg-black '>
              <div className="navabar absolute top-0 left-0 z-[2] w-full px-10 py-6 text-white">
                <div className="logos flex gap-4 items-center">
                  <div className='lines flex flex-col gap-1'>
                    <div className="line w-10 h-[4px] bg-white"></div>
                    <div className="line w-7 h-[4px] bg-white"></div>
                    <div className="line w-4 h-[4px] bg-white"></div>
                  </div>
                  <div className='logo'>
                    <h3 className='text-2xl -mt-2'>Rockstar</h3>
                  </div>

                </div>
              </div>

            

              <div className='photosdiv relative w-full h-screen overflow-hidden'>
              <img className='w-full sky scale-[1.6] rotate-[-15deg] absolute top-0 left-0 h-full obect-cover' src="./sky.png" alt="" />
                <img className='w-full bg scale-[2] rotate-[-5deg] absolute top-0 left-0 h-full obect-cover' src="./bg.png" alt="" />
                <img className='h-2/3 character absolute overflow-hidden scale-[3] rotate-[-20deg] z-[10] -bottom-[150%] left-1/2 -translate-x-1/2  obect-cover' src="./girlbg.png" alt="" />

                <div className="text scale-[1.3] rotate-[-15deg]  text-white flex flex-col gap-1 absolute top-10 left-1/2 -translate-x-1/2">
                  <h1 className="text-[6rem] leading-none -ml-20">grand</h1>
                  <h1 className="text-[6rem] leading-none ml-10">theft</h1>
                  <h1 className="text-[6rem] leading-none -ml-20">auto</h1>
                </div>

              </div>
              <div className="btbar text-white absolute left-0 bottom-0 w-full px-10 py-10 bg-gradient-to-t from-black to-transparent">
                <div className="scrollDown absolute bottom-6 flex gap-1 items-center">
                  <i className="ri-arrow-down-line text-2xl"></i>
                  <h3 className='font-[Helvetica] text-[14px]'>Scroll Down</h3>
                </div>

                <div className="play relative">
                  <img className='absolute h-8 -bottom-4 z-[50] left-1/2 -translate-x-1/2 ' src="./ps5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        ) }
    </>
  )
}

export default App