import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DataPiker() {
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

  const primeiraData = range.from;
  const segundaData = range.to;
  console.log("1 - ", primeiraData, "2 - ", segundaData)
  return (
    <section className="flex-1 flex flex-col">
      <div className="flex">
        <Calendar
          mode="range"
          className="m-3 rounded-md border shadow"
          selected={range}
          onSelect={(r) => {
            if (r) setRange(r); // só atualiza se r não for undefined
          }}
        ></Calendar>

        <div className="bg-white/80 border-b shadow-sm flex-1 m-3 rounded-md"></div>
      </div>

      <div className="bg-white/80 border-b shadow-md flex-1 m-2 rounded-md "></div>

     
    </section>
  );
}
