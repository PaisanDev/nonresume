import { LogOut, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "[Project/Company Name]",
    position: "[Position]",
    duration: "[2020 - 2025]",
    time: "[Time]",
    stacks: "[Stacks : something]",
    information: "[Information]",
    images: [
      "https://placehold.co/1920x1080",
      "https://placehold.co/1920x1080",
    ],
  },
  {
    name: "[Project/Company Name]",
    position: "[Position]",
    duration: "[2020 - 2025]",
    time: "[Time]",
    stacks: "[Stacks : something]",
    information: "[Information]",
    images: [
      "https://placehold.co/1920x1080",
      "https://placehold.co/1920x1080",
    ],
  },
  {
    name: "[Project/Company Name]",
    position: "[Position]",
    duration: "[2020 - 2025]",
    time: "[Time]",
    stacks: "[Stacks : something]",
    information: "[Information]",
    images: [
      "https://placehold.co/1920x1080",
      "https://placehold.co/1920x1080",
    ],
  },
  // Add more project objects as needed
];

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <nav className="flex flex-row justify-between w-full py-4 px-6 border-b-[1px]">
          <div className="uppercase font-bold items-center flex">
            non.resume
          </div>
          <div className="flex">
            <Button variant={"ghost"}>
              Sign out<LogOut></LogOut>
            </Button>
          </div>
        </nav>
        <main className="flex flex-col justify-between md:grid md:grid-cols-12 md:px-20 lg:px-40 py-6 transition-all">
          <div className="flex col-span-4 justify-center border-b-[1px] md:border-b-0 pb-8">
            <div className="flex flex-col w-full justify-center md:justify-start gap-4 px-6">
              <img
                src="https://placehold.co/600x600"
                alt="profile"
                className="rounded-full w-40 mx-auto md:mx-0"
              />
              <div className="flex flex-col gap-2 justify-start">
                <p className="text-xl font-medium">Lnwza Eiei</p>
                <p className="flex items-center gap-2 font-normal">
                  <MapPin className="text-gray-500" size={18}></MapPin> Location
                </p>
                <p>Bio</p>
                <div className="flex">
                  <p>Social media</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center hidden md:flex col-span-2">Timeline</div> */}
          <div className="flex col-span-8 text-left px-6 pt-8 md:p-0 ">
            <div className="flex flex-col gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col gap-2 py-4 px-6 rounded-md border-[1px] "
                >
                  <p className="text-2xl font-semibold">{project.name}</p>
                  <div className="flex gap-1">
                    <p>{project.position}</p>
                    <p>{project.duration}</p>
                    <p>{project.time}</p>
                  </div>
                  <div className="flex gap-1 ">
                    <p>{project.stacks}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>{project.information}</p>
                  </div>
                  <div className="grid grid-cols-12 gap-1 h-full">
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt="project"
                        className="rounded-md col-span-full md:col-span-6 w-full"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
