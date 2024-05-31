import { Button } from "@mui/material";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { ImAttachment, ImCross } from "react-icons/im";
import useFileStore from "./Zustand"; // Import the Zustand store

function Attachment() {
  const files = useFileStore((state) => state.files); // Access files state from the Zustand store
  const addFiles = useFileStore((state) => state.addFiles); // Access addFiles action from the Zustand store

  const handleAddFiles = (e) => {
    const fileList = Array.from(e.target.files).map((file, index) => ({
      name: `${file.name} (${index + 1})`,
      file: file,
    }));
    addFiles(fileList); // Update files state using the addFiles action
  };

  // const handleRemoveFile = (index) => {
  //   useFileStore.removeFile(index); // Remove file from the files state using the removeFile action
  //   console.log("hello...");
  // };

  // Function to remove a file
  const handleRemoveFile = (index) => {
    useFileStore.getState().removeFile(index); // Corrected usage to call removeFile within the hook context
    console.log("hello...");
  };

  const [flag, setFlag] = React.useState(true);
  const handleOff = () => {
    setFlag(false);
  };

  return (
    <div>
      {flag && (
        <div className="w-full border-[1px] border-black p-2">
          <div className="flex space-x-10 justify-between items-center">
            <div className="font-semibold">Attachments ({files.length})</div>
            <ImCross onClick={handleOff} className="cursor-pointer" />
          </div>
          <div className="border-b-2 border-gray-500"></div>
          <div className="">
            {files.map((file, index) => (
              <div key={index}>
                <div className="flex space-x-10 items-center">
                  <div className="grid grid-cols-4">
                    <div className="col-span-3">
                      <Button
                        component="label"
                        startIcon={<ImAttachment className="outline-none" />}
                      >
                        {file.name}
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleAddFiles}
                          multiple
                        />
                      </Button>
                    </div>
                    <div className="col-span-1 mt-5">
                      <BsTrash
                        onClick={() => handleRemoveFile(index)}
                        className="text-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex space-x-10 items-center">
              <Button
                component="label"
                startIcon={<ImAttachment className="outline-none" />}
              >
                Upload file
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleAddFiles}
                  multiple
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attachment;
