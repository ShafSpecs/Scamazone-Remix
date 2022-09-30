import { Fragment } from "react"

function CategoryCard() {
  return (
    <div className="flex flex-row py-4 pl-3 rounded-2xl shadow-md shadow-gray-400/40 w-full hover:skew-y-6 ease-in-out duration-500 border-1 border-white hover:cursor-pointer">
      <section className="w-12 h-12 rounded-lg flex justify-center content-center flex-row p-2 bg-c-bluish-green">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
          <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
        </svg>
      </section>
      <section className="w-2/3 ml-2 flex flex-row text-center content-center justify-center">
        <p className="text-white font-medium text-xl">Sneakers</p>
      </section>
    </div>
  )
}

export default function CategoriesComponent() {
  return (
    <div className="text-white">
      <section className="flex flex-row justify-between content-center mt-10">
        <h3 className="font-bold text-3xl">Popular Categories</h3>
        <span className="hover:cursor-pointer transition-all duration-200 hover:scale-110">Browse all categories</span>
      </section>
      <div className="w-full grid grid-flow-row grid-cols-4 justify-between align-middle gap-4 mt-2">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  )
}