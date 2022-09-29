import { NavLink } from "@remix-run/react";

export default function SideNav({ children }: any) {
  return (
    <div className="hidden lg:flex w-80 border-r border-r-c-white flex-col py-8 px-6">
      <span className="flex flex-row content-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
        <span className="text-3xl ml-2">Scamazone</span>
      </span>

      <div className="flex flex-col justify-between flex-1 mt-9 ">
        <nav>
          <NavLink className={({ isActive }) => `${isActive ? "flex items-center px-4 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 mt-5" : "flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200"}`} to="/" end={true}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>

            <span className="mx-4 font-medium">Home</span>
          </NavLink>

          <NavLink className={({ isActive }) => `${isActive ? "flex items-center px-4 py-2 rounded-md bg-gray-800 text-gray-200 mt-5" : "flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200"}`} to="/catalogue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
              <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>

            <span className="mx-4 font-medium">Catalogue</span>
          </NavLink>

          <NavLink className={({ isActive }) => `${isActive ? "flex items-center px-4 py-2 rounded-md bg-gray-800 text-gray-200 mt-5" : "flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200"}`} to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
            </svg>

            <span className="mx-4 font-medium">Cart</span>
          </NavLink>
        </nav>

        <NavLink to="/profile" className="flex items-center px-4 -mx-2 group hover:cursor-pointer">
          <img className="object-cover mx-2 rounded-full h-9 w-9 p-1 group-hover:text-gray-800 group-hover:bg-gray-200 bg-gray-400" src="/icons/user.svg" alt="avatar" />
          <h4 className="mx-2 font-medium text-gray-200 group-hover:underline hover:underline">John Doe</h4>
        </NavLink>
      </div>
    </div>
  )
}