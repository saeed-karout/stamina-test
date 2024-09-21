import video from '/video2.mp4'
function Video() {
  return (
    <div>
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center text-white"
      >
        <div
          className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"
        >
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={video}
            type="video/mp4"
            autoPlay
            muted
            loop
            
          />
        </div>
        <div className="video-content space-y-2 z-10">
          <h1 className="font-light text-6xl">We are Stamina Trading</h1>
        </div>
      </section>
      <style>
        {`
          .video-docker video {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .video-docker::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
}

export default Video;