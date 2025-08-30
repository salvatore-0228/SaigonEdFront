import React from "react";
import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";

export function AuthButtons({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean, toggleSidebar: () => void }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (!isAuthenticated || isLoading) return null;

  return (
    <>
      {!sidebarOpen && (
        <div className="absolute left-[1rem] bottom-[0.5dvh] z-50 h-[4dvh]">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <img
              src="/images/btn/side_btn.png"
              alt="Menu"
              className="w-[4dvh] h-[4dvh] hover:opacity-80 transition"
            />
          </button>
        </div>
      )}
      <div className="absolute left-[7dvh] bottom-[0.5dvh] z-10 h-[4dvh]">
        <button onClick={() => redirect("/pages/2")} className="focus:outline-none">
          <img
            src="/images/btn/contents_btn.png"
            alt="Menu"
            className="w-[4dvh] h-[4dvh] hover:opacity-80 transition"
          />
        </button>
      </div>
    </>
  );
}
