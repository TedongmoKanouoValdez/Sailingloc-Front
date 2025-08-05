"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards-supportmessages";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function SupportMessagesPage() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 w-full justify-center items-center">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-[52rem]">
                <SectionCards />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
