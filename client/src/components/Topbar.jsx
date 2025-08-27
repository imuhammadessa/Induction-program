import { Bars3Icon } from "@heroicons/react/24/outline";

const Topbar = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-400 hover:text-white lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <div className="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
      <a href="#">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
        />
      </a>
    </div>
  );
};

export default Topbar;
