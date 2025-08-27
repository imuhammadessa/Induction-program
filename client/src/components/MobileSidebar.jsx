import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, teams, classNames } from "./navigation";

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />
      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
              <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
              </button>
            </div>
          </TransitionChild>

          {/* Sidebar content (reuse same nav as desktop) */}
          <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
            <div className="relative flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto dark:hidden"
              />
            </div>
            {/* Navigation reuse */}
            <SidebarNav />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

const SidebarNav = () => (
  <nav className="flex flex-1 flex-col">
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-white/5 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white",
                  "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                )}
              >
                <item.icon aria-hidden="true" className="size-6 shrink-0" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </nav>
);

export default MobileSidebar;
