import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1240px] p-8 flex md:flex-row flex-col gap-8">
        <div className="bg-red-400 w-full">
          <h4>Div one</h4>
        </div>
        <div className="bg-orange-400 w-full">
          <h1>Div two</h1>
        </div>
      </div>
    </section>
  );
}
