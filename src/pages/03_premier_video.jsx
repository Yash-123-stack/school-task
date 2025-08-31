import React from 'react'
import video from "../assets/Home_page.mp4"
export default function PremierSchoolVideo() {
  return (
   <>
   <div className = "blade-top-margin-sm">
    <video src={video}
        autoPlay
        loop
        muted
        playsInline
        controls
        className = "w-full h-full"
    />
   </div>
   </>
  )
}
