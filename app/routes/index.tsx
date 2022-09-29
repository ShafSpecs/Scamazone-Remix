import type { LoaderFunction } from "@remix-run/node";

import { Icon } from '@iconify/react';
import SideNav from "~/components/SideNav";
import PageLayout from "~/components/PageLayout";
import BottomNav from "~/components/BottomNav";
import { Form } from "@remix-run/react";
import SearchComponent from "~/components/DesktopSearch";
import CustomCarousel from "~/components/home/CarouselComponent";
import CategoriesComponent from "~/components/home/CategoriesComponent";

export const loader: LoaderFunction = async () => {
  // const dummyDetails = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john.doe@gmail.com",
  //   password: "password123",
  //   address: "123 Main St"
  // };

  // const res = await fetch("http://localhost:8080/api/v1/users/register", {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(dummyDetails)
  // });
  // const body = await res.json();

  // console.log(body);
  // return body;
  return null
}

function CategoriesMobile() {
  return (
    <div className="text-white w-full mt-12 font-medium">
      <section className="flex flex-row justify-between content-center">
        <span className="text-xl font-semibold">Popular Categories</span>
        <span className="text-c-white text-base font-normal">See all</span>
      </section>

      <section className="mt-4 flex flex-row justify-between content-center font-medium">
        <div className="flex flex-col content-center">
          <span className="p-2 rounded-2xl bg-c-bluish-green flex flex-row justify-center content-center">
            <Icon icon="mdi:shoe-sneaker" className="w-9 h-10"/>
          </span>
          <span className="text-white mt-3">Sneakers</span>
        </div>
        <div className="flex flex-col content-center">
          <span className="p-2 rounded-2xl bg-c-bluish-green flex flex-row justify-center content-center">
            <Icon icon="mdi:shoe-sneaker" className="w-9 h-10"/>
          </span>
          <span className="text-white mt-3">Sneakers</span>
        </div>
        <div className="flex flex-col content-center">
          <span className="p-2 rounded-2xl bg-c-bluish-green flex flex-row justify-center content-center">
            <Icon icon="mdi:shoe-sneaker" className="w-9 h-10"/>
          </span>
          <span className="text-white mt-3">Sneakers</span>
        </div>
        <div className="flex flex-col content-center">
          <span className="p-2 rounded-2xl bg-c-bluish-green flex flex-row justify-center content-center">
            <Icon icon="mdi:shoe-sneaker" className="w-9 h-10"/>
          </span>
          <span className="text-white mt-3">Sneakers</span>
        </div>
      </section>
    </div>
  )
}

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <SideNav />
      <PageLayout>
        {/* Mobile View */}
        <section className="flex lg:hidden h-full w-full px-6 pt-9 flex-col justify-start content-center font-medium">
          <Form className="flex items-center w-full py-2">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-c-bluish-green rounded-full placeholder:text-c-white text-gray-50 text-sm border-0 focus:ring-c-blue-dark focus:border-c-blue-dark block w-full pl-10 p-2.5 align-middle" placeholder="Search something..." required />
            </div>
          </Form>

          <div className="bg-gradient-to-br from-c-purple via-c-pink to-c-gold rounded-lg h-1/4 w-full mt-6"></div>

          <CategoriesMobile />
        </section>

        {/* Desktop View */}
        <section className="hidden lg:flex h-full flex-1 px-8 pt-8 flex-col justify-start content-center max-w-7xl mx-auto">
          <SearchComponent />
          <CustomCarousel />
          <CategoriesComponent />
        </section>
      </PageLayout>
      <BottomNav />
    </div>
  );
}
