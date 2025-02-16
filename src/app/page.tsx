import React from "react";


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
    <nav className="flex min-h-20  items-baseline bg-gray-300">
        <span className="text-2xl ms-20 mt-5">期货通</span>
        <span className="ms-10 text-xl">前沿的AI交易软件</span>
    </nav>
  );
};

const Menu = () => {
  return (
    <div className="h-screen bg-red-500 flex items-center justify-center p-4">
    <div className="max-w-3xl text-center space-y-8">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        基于人工智能的大模型
      </h1>

      <h2 className="text-3xl md:text-4xl text-gray-600 font-medium">
        交易软件
      </h2>

      {/* 修改后的红色按钮 */}
      <div className="mt-12">
        <button className="bg-white  text-xl md:text-2xl px-8 py-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
          点击下载最新
        </button>
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
        <source src="/video/demo.mp4" type="video/mp4" />
        您的浏览器不支持视频播放
      </video>
    </div>

    {/* 左右两列文本 */}
    <div className="grid grid-cols-2 gap-10 text-gray-600 text-2xl max-w-4xl text-center">
      <div>
        <p>深度挖掘肉眼看不到的机会</p>
        <p>快速捕捉手动跟不上的行情</p>
        <p>用前沿的科技武装你的交易</p>
      </div>
      <div>
        <p>深读交易团队</p>
        <p>人工智能领域的投研专家</p>
        <p>不断升级的</p>
      </div>
    </div>

    {/* 三个核心特点 */}
    <div className="flex space-x-10 mt-10 text-lg font-semibold">
      <p>更深的技术</p>
      <p>更快的速度</p>
      <p>更高的效率</p>
    </div>

    {/* 客户统计 */}
    <div className="mt-10 text-center">
      <p className="text-2xl font-bold">
        团队已服务 <span className="text-blue-500">160832</span> 位客户
      </p>
      <p className="text-gray-500 text-sm"> {"// 上面的数字每日增长一点 //"}</p>
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



