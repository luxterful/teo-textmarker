"use client";

import processes from "@/app/resources/processes";
import React from "react";
import { ChangeEvent, useState } from "react";

function CopyField(props: { fieldId: string }) {
  const [showSuccess, setShowSuccess] = useState(false);

  function copy() {
    setShowSuccess(true);
    navigator.clipboard.writeText(props.fieldId);

    setTimeout(() => {
      setShowSuccess(false); // Reset animating state
    }, 300);
  }

  return (
    <td
      className="border p-2 rounded-md cursor-pointer flex gap-2 items-center text-gray-600 hover:text-black truncate overflow-hidden text-sm md:text-base"
      onClick={copy}
    >
      {showSuccess ? (
        <svg
          className="w-3.5 h-3.5 inline flex-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      ) : (
        <svg
          className="w-3.5 h-3.5 inline flex-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
        </svg>
      )}

      {props.fieldId}
    </td>
  );
}

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
        className="border rounded-md mb-5 w-full overflow-hidden"
        value={selection}
        onChange={handleChange}
      >
        {processes.map((process) => (
          <option key={process.title}>{process.title}</option>
        ))}
      </select>

      <div className={`content-div ${animating ? "fade-out" : "fade-in"}`}>
        <table className="table-fixed border-separate border-spacing-y-1 border-spacing-x-5 w-full">
          <tbody>
            {processes
              .find((process) => process.title === selection)!
              .groups.map((group) => (
                <React.Fragment key={group.title}>
                  <tr
                    key={group.title}
                    className="text-lg font-bold md:text-right"
                  >
                    <td className="pt-5">{group.title}</td>
                  </tr>

                  {group.fields.map((field) => (
                    <tr key={group.title + field.id}>
                      <td className="md:text-right block md:table-cell whitespace-nowrap">
                        {field.title}
                      </td>
                      <CopyField fieldId={field.id} />
                    </tr>
                  ))}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
