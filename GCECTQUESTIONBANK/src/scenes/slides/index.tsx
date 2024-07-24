import React from "react";
import HText from "@/shared/HText";
import Campus from "@/assets/collegeCampus.jpg";
import ActionButton from "@/shared/ActionButton";
import SwitchButton from "@/shared/SwitchButton";

type Props = {};

const Slides: React.FC<Props> = () => {
  return (
    <section className="py-32 ml-5 relative">
      <HText>GCECT Question Bank</HText>
      <div className="flex justify-around">
        <div className="relative py-6">
          <img
            src={Campus}
            alt="Picture of College Campus"
            height={540}
            width={900}
            className="rounded-lg blur-sm brightness-125 to-transparent"
          />
          <div className="top-0 absolute flex-col justify-around h-full py-10 px-10">
            <h1 className="text-8xl font-black text-primary-500 ">
              The GCECT
              <br /> Question Bank <br />
              Makes it easier
            </h1>
            <p className="text-4xl font-light text-primary-500 pt-5 pb-32">
              Get question papers ready on the go
            </p>
            <ActionButton
              height="50px"
              width="220px"
              text="Checkout Questions"
              textSize="20px"
            />
            <div className="absolute bottom-10 left-4 flex space-x-2 px-8 py-3">
              <SwitchButton text="<" />
              <SwitchButton text=">" />
            </div>
          </div>
        </div>
        <div className="bg-primary-200 p-8 rounded-2xl h-max max-h-min w-80">
          <h2 className="font-semibold text-2xl mb-4">Notice Box</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Maths(BS101) Mid Sem-I Paper Uploaded</li>
            <li>Physics (BS201) Mid Sem-I Paper Uploaded</li>
            <li>DSA (BS101) Mid Sem-I Paper Uploaded </li>
            <li>CO (BS101) Mid Sem-I Paper Uploaded </li>
            <li>Electrical (BS101) Mid Sem-I Paper Uploaded</li>
            <li>English (BS101) Mid Sem-I Paper Uploaded</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slides;