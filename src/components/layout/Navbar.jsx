import { Bell, Moon, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Search */}
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <button className="rounded-xl p-2 hover:bg-slate-100">
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">
            S
          </div>

          <div>
            <p className="font-medium">Shruti</p>
            <p className="text-sm text-slate-500">
              practices
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;