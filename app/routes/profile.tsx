import BottomNav from "~/components/BottomNav";
import PageLayout from "~/components/PageLayout";
import SideNav from "~/components/SideNav";

export default function Profile() {
  return(
    <div className="w-full h-full flex flex-col lg:flex-row">
    <SideNav />
    <PageLayout>
      {/* Mobile View */}
      <section className="flex lg:hidden h-full w-full px-6 pt-10 flex-col justify-start content-center font-medium">
        
      </section>

      {/* Desktop View */}
      <section className="hidden lg:flex h-full w-full"></section>
    </PageLayout>
    <BottomNav />
  </div>
  )
}