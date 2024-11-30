"use client";

import Image from "next/image";
import  ReactPlayer from "react-player"

function VideoPlayer({
  thumbnail,
  classes,
}: {
  thumbnail: string;
  classes?: string;
}) {
  return (
    <div className={`w-full ${classes}`}>
      <div className="relative">
        <div className="md:block hidden py-5">
          <ReactPlayer
            url="https://apiwebsite.gmdirecthire.co.uk/uploads/FINAL_1_online_video_cutter_com_e134029077.mp4"
            width="100%"
            height="100%"
            className="mx-auto rounded-md"
            light={
              <div className="relative h-[500px] w-full">
                <Image
                  src={thumbnail}
                  alt="Thumbnail"
                  className="rounded-lg object-cover"
                  fill
                  quality={75}
                  loading="lazy"
                />
              </div>
            }
            playing={true}
            controls
          />
        </div>
        <div className="md:hidden block  py-5 px-3 rounded-md">
          <ReactPlayer
            url="https://apiwebsite.gmdirecthire.co.uk/uploads/FINAL_1_online_video_cutter_com_e134029077.mp4"
            width="100%"
            height="100%"
            className="mx-auto rounded-md"
            light={
              <Image
                src={thumbnail}
                alt="Thumbnail"
                className="rounded-md"
                width={397}
                height={253}
                quality={75}
                loading="lazy"
              />
            }
            playing={true}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
