import { Button } from "@/components/ui/button";
import Bg from "../assets/image/background-download1.jpg"
import Image from 'next/image'
import { BookMarked, Download, Factory, Terminal } from "lucide-react";

const itemBlock = [
  {
    title: "Guide",
    description: "Learn how to install Docker for Mac, Windows, or Linux and explore our developer tools.",
    icon: <BookMarked size={32} />,
  },
  {
    title: "Manuals",
    description: "Access the official Docker documentation, including the Docker Engine, Docker Compose, and Docker Desktop.",
    icon: <Factory size={32} />,
  },
  {
    title: "Reference",
    description: "Browse CLI and API documentation, access training and resources, and more.",
    icon: <Terminal size={32} />,
  },
]

const problemBlock = [
  {
    title: "Docker Desktop",
    description: "Docker Desktop is an application for MacOS and Windows machines for the building and sharing of containerized applications and microservices.",
    icon: <BookMarked size={32} />,
  },
  {
    title: "Docker Hub",
    description: "Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications.",
    icon: <Factory size={32} />,
  },
  {
    title: "Docker Engine",
    description: "Docker Engine is the industry-leading container runtime and is the foundation of Docker containers.",
    icon: <Terminal size={32} />,
  },
  {
    title: "Docker Desktop",
    description: "Docker Desktop is an application for MacOS and Windows machines for the building and sharing of containerized applications and microservices.",
    icon: <BookMarked size={32} />,
  },
  {
    title: "Docker Hub",
    description: "Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications.",
    icon: <Factory size={32} />,
  },
  {
    title: "Docker Engine",
    description: "Docker Engine is the industry-leading container runtime and is the foundation of Docker containers.",
    icon: <Terminal size={32} />,
  },
  {
    title: "Docker Desktop",
    description: "Docker Desktop is an application for MacOS and Windows machines for the building and sharing of containerized applications and microservices.",
    icon: <BookMarked size={32} />,
  },
  {
    title: "Docker Hub",
    description: "Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications.",
    icon: <Factory size={32} />,
  },
  {
    title: "Docker Engine",
    description: "Docker Engine is the industry-leading container runtime and is the foundation of Docker containers.",
    icon: <Terminal size={32} />,
  },
  {
    title: "Docker Desktop",
    description: "Docker Desktop is an application for MacOS and Windows machines for the building and sharing of containerized applications and microservices.",
    icon: <BookMarked size={32} />,
  },
  {
    title: "Docker Hub",
    description: "Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications.",
    icon: <Factory size={32} />,
  },
  {
    title: "Docker Engine",
    description: "Docker Engine is the industry-leading container runtime and is the foundation of Docker containers.",
    icon: <Terminal size={32} />,
  }

]




export default function Home() {
  return (
    <main className="max-w-[1270px] w-full mx-auto pt-20 flex flex-col gap-10">
      <DownloadBlock />
      <div className='grid grid-cols-3 gap-4 mt-8'>
        {itemBlock.map((item, index) => (
          <ItemBlock key={index} description={item.description} icon={item.icon} title={item.title} />
        ))}

      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 border-2 border-[#000000] p-8 background-grid shadow-lg">
          <h1 className="font-semibold text-lg"> Getting start</h1>
          <h2 className="text-sm mb-10"> Learn Docker basics and the benefits of containerizing your applications.</h2>
          <Button className="mt-4"> Get started </Button>
        </div>

        <div className="col-span-1 border-2 border-[#000000] p-8 background-grid shadow-lg">
          <h1 className="font-semibold text-lg"> Features </h1>
          <h2 className="text-sm mb-10"> Accelerate your builds with cloud capabilities.</h2>
          <div className="flex gap-4">
            <Button className="mt-4"> Dashboard </Button>
            <Button className="mt-4"> Docs </Button>
          </div>
        </div>

      </div>

      <div className="v">
        <div className="font-bold text-2xl"> Solve Problems </div>
        <div className="grid grid-cols-4 gap-4">
          {problemBlock.map((item, index) => (
            <div className='flex flex-col items-start w-full rounded-md shadow-md hover:shadow-xl transition-all gap-5 p-5' key={index}>
              <div className="flex gap-4">
                {item.icon}
                <h2 className="font-semibold text-2xl"> {item.title} </h2>
              </div>
              <p className="text-sm">  {item.description} </p>
              <ul>
                <li> <a href="#" className="text-blue-500"> Overview </a> </li>
              </ul>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}


const DownloadBlock = () => {
  return (
    <div className='p-4 flex flex-col items-start w-full h-[200px] rounded-md border-[#000000] border-2 shadow-md gap-5 background text-white'>
      <h2 className="font-semibold text-3xl"> Get NameApp </h2>
      <p> Learn how to install Docker for Mac, Windows, or Linux and explore our developer tools.</p>
      <Button className='mt-4'> <Download className="mr-2" /> Download </Button>
    </div>
  )
}

const ItemBlock = ({ icon, description, title }: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => {
  return (
    <div className='flex flex-col items-start w-full rounded-md shadow-lg gap-5 p-5'>
      <div className="flex gap-4">
        {icon}
        <h2 className="font-semibold text-2xl"> {title} </h2>
      </div>
      <p className="text-sm">  {description} </p>
    </div>
  )
}

