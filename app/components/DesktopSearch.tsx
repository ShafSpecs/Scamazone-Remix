import { Form } from "@remix-run/react";

export default function SearchComponent() {
  return (
    <Form className="flex items-center w-full py-2 mx-auto">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-c-bluish-green rounded-full placeholder:text-c-white text-gray-50 text-sm border-0 focus:ring-c-blue-dark focus:border-c-blue-dark block w-full pl-10 p-2.5 align-middle" placeholder="Search something..." required />
      </div>
    </Form>
  )
}