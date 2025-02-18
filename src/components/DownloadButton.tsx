'use client'

const handleDownload = () => {
  const fileUrl = "/qihuotong.rar"; // public 目录下的文件
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "/qihuotong.rar"; // 设置下载的文件名
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const DownloadButton = () => {
  return (
    <button  onClick={handleDownload} className="bg-white  text-xl md:text-2xl px-8 py-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
    点击下载最新版本
    </button>
  )
}

export default DownloadButton