import { useSearchParams } from "react-router-dom";
import { DataTable } from "../data-tables";
import { DashboardHeader } from "../header";
import { columns } from "./columns";
import React from "react";

export function Table({}) {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const quantity = searchParams.get("quantity");
  const mass = searchParams.get("mass");
  const printer = searchParams.get("printer");
  const box = searchParams.get("box");
  const material = searchParams.get("material"); 
  let a;

  if (printer === "Formiga") {
    a = 24/300; // Your value 'a' for Nylon12 material
  } else if (printer === "Metal") {
    a = 1.2; // Your value 'a' for Metal material
  }

  
  const newbox = box
  .substring(0, box.length) // Remove brackets
  .split(',') // Split by commas
  .map(Number)
  .map(number => parseFloat(number.toFixed(2))); 
  const height = Math.max(...newbox)
  const time = a * height; 
  const finalbox = newbox.map((value, index) => {
    const label = ['x', 'y', 'z'][index];
    return `${label}: ${value.toFixed(2)}`;
  });
  const data = [
    {
      name: "General Consumables",
      //subtext: "Consumables",
      quantity: "1.0",
      unitPrice: "1",
    },
    {
      name: "3D Printer - EOS Formiga 110 (hrs)",
      subtext: `height: ${height}`,
      //subtext: "Equipment",
      quantity: time,
      unitPrice: "20",
    },
    {
      name: "EOS - Nylon12 (g)",
      //subtext: "Raw Materials",
      quantity: mass,
      unitPrice: "0.1",
    },
    {
      name: "Labour duration (hrs)",
      //subtext: "Labour",
      quantity: "1.5",
      unitPrice: "20",
    },
  ];

  return (
    <>
      <DashboardHeader
        className="mb-2"
        heading={"Results"}
        text={`Customer: ${name}, Qty: ${quantity}, Printer: ${printer}, Material: ${material}, Bounding Box: ${finalbox}`}
        back
      />
      <DataTable columns={columns} data={data} />
    </>
  );
}


