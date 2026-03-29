import React from "react";
import { AppStoreButtons } from "../ui/AppStoreButtons";
import Image from "next/image";
export const AppDownload: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-primary rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">

            <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-6 block">
              Get HelpMe NG Today
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Find Trusted Professionals{" "}
              <br className="hidden md:block" />
              In Minutes.
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-md">
              Download the app to book reliable services or earn as a verified professional.
            </p>

            <AppStoreButtons align="left" size="md" />

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">

            {/* QR CARD */}
            <div className="bg-gray-100 rounded-3xl p-8 shadow-xl text-center w-full">

             <Image
                src="https://i.pinimg.com/736x/78/d5/01/78d5016be7c774417abb6421183fa67c.jpg"
                alt="QR code to download HelpMe NG app"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
             

              <p className="text-gray-500 text-xs uppercase tracking-widest mt-4">
                Scan to download
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};