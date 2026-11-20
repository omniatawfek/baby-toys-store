import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center  bg-blue-50 p-6 text-center">
          <Image src={"/feature1.png"} alt="" width={70} height={70} />
          <h3 className="caret-blue-400 mt-3">Customer core</h3>
          <p>24h hour follow up</p>
        </div>
        <div className="flex flex-col items-center  bg-amber-50 p-6 text-center">
          <Image src={"/feature2.png"} alt="" width={88} height={53} />
          <h3 className="caret-orange-400 mt-5">Free ship</h3>
          <p>Free shipping for 150$ and up</p>
        </div>
        <div className="flex flex-col items-center  bg-green-50 p-6 text-center">
          <Image src={"/feature3.png"} alt="" width={75} height={75} />
          <h3 className="caret-green-400 mt-3">Return</h3>
          <p>Within 7 days</p>
        </div>
      </div>
    </section>
  );
}
