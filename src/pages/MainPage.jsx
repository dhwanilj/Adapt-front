import React from "react";
import { PrintingForm } from "../components/printing-form";

const MainPage = () => {
  return (
    <div className="container grid place-content-center min-h-screen">
      <div className="border p-10 grid gap-4">
        <h1 className="font-bold text-2xl">3D Printer Order Form</h1>
        <PrintingForm />
      </div>
    </div>
  );
};

export default MainPage;
