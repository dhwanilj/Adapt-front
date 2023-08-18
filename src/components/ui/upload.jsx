"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import { Label } from "./label";
import { Icons } from "../icons";

const MultiUpload = ({ onUpload, defaultValues, label }) => {
  const [previousFiles, setPreviousFiles] = useState();
  const [myFiles, setMyFiles] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPreviousFiles(defaultValues);
  }, [defaultValues]);

  useEffect(() => {
    onUpload(previousFiles);
  }, [previousFiles]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setMyFiles(myFiles);

      const formData = new FormData();

      acceptedFiles.map((image, i) => {
        formData.append("file", image);
      });

      setIsLoading(true);

      await axios
        .post(import.meta.env.VITE_API_BASE_URL + "/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("Uploaded");
          setPreviousFiles(res.data.files);
        })
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div>
      <section>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />

          <div className="flex gap-2 items-center mb-2">
            <Label htmlFor={""} label={label || "Upload"} />
            <button
              type="button"
              onClick={() => onUpload(previousFiles)}
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "h-fit py-1"
              )}
            >
              <Icons.add className="h-4 w-4 mr-2" />
              Add File
            </button>
          </div>
        </div>
      </section>
      <div className="border p-4 border-dashed rounded-md">
        <div>
          {!previousFiles ? (
            <p className="text-sm">
              {isLoading && (
                <Icons.spinner className="inline animate-spin mr-2" />
              )}
              No file uploaded
            </p>
          ) : (
            <p className="text-sm">{previousFiles}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { MultiUpload as Upload };
