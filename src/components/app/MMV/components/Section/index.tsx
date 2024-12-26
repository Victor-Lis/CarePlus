export default function Section({children, aosData, direction}:{children: React.ReactNode, aosData: string, direction?: "right" | "left"}) {
  return (
    <div
      className={`my-14 w-full flex flex-col ${direction?.includes("right") ? "justify-end items-end": "justify-start items-start"}`}
      data-aos={aosData}
      data-aos-delay="150"
      data-aos-duration="500"
    >
      {children}
    </div>
  );
}
