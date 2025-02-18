import React from "react";
import Image from "next/image";
import RandomIncreasingNumber from "../components/RandomIncreasingNumber";
import DownloadButton from "@/components/DownloadButton";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Teach />
      <Footer />
    </div>
  );
}


const Navbar = () => {
  return (
    <nav className="flex min-h-20   bg-gray-300 items-center ">
      <Image src="/logo.png" width={60} height={60} alt="logo" className="ms-20" />
      <span className="text-2xl">期货通</span>
      <span className="ms-10 text-xl mt-2">前沿的AI交易软件</span>
    </nav>
  );
};

const Menu = () => {
  return (
    <div className="h-screen bg-red-500 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl  font-bold  text-white">
          基于人工智能的大模型交易软件
        </h1>
        {/* 修改后的红色按钮 */}
        <div className="mt-20">
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

const Teach = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6 w-full mt-20">
      {/* 视频展示框 */}
      <div className="border border-blue-300 p-6 rounded-lg bg-white shadow-lg w-[60vw]  text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">软件操作示范</h2>
        <p className="text-gray-500 mb-2">《视频》</p>
        {/* 视频播放器，宽度调整 */}
        <video className="w-full h-auto rounded-lg" controls>
          <source src="/video.mp4" type="video/mp4" />
          您的浏览器不支持视频播放
        </video>
      </div>



      {/* 图片展示文字 */}
      <div>
        <Image src='/first.png' width={1920} height={1080} alt="image" />
        <Image src='/second.png' width={1920} height={1080} alt="image" />
      </div>
      {/* 客户统计 */}
      <div className="mt-10 text-center">
        <p className="text-2xl font-bold">
          团队已服务 <RandomIncreasingNumber /> 位客户
        </p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© 2025 期货通</p>
      <p>备案信息:上海</p>
    </footer>
  )
}
