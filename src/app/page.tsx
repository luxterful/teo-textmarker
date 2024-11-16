"use client";

import processes from "@/app/resources/processes";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [selection, setSelection] = useState(processes[0].title);

  const [animating, setAnimating] = useState(false); // Control animation state

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAnimating(true); // Start the animation
    setSelection(event.target.value); // Update the selected value

    // Reset the animation state after the transition duration
    setTimeout(() => {
      setAnimating(false); // Reset animating state
    }, 300); // Match this to your CSS animation duration
  };

  return (
    <div className="container mx-auto px-5">
      <select
        className="border rounded-md mb-5"
        value={selection}
        onChange={handleChange}
      >
        {processes.map((process) => (
          <option>{process.title}</option>
        ))}
      </select>

      <div className={`content-div ${animating ? "fade-out" : "fade-in"}`}>
        {processes
          .find((process) => process.title === selection)!
          .groups.map((group) => (
            <div className="mb-5">
              <span className="text-lg font-bold">{group.title}</span>
              <table className="table-auto border-separate border-spacing-2">
                <tbody>
                  {group.fields.map((field) => (
                    <tr>
                      <td>{field.title}</td>
                      <td
                        className="border p-2 rounded-md cursor-pointer flex gap-2 items-center text-gray-600 hover:text-black"
                        onClick={async () => {
                          navigator.clipboard.writeText("");
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5 inline "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                        {field.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
}
