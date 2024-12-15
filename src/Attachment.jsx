import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ImAttachment, ImCross } from "react-icons/im";
import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

function Attachment({ rowId }) {
  const employeeId = 2;

  const { addItDecId, itDecId } = useFileStore();
  const globalFiles = useFileStore((state) => state.files); // Global files
  const globalITDECID = useFileStore((state) => state.itDecId); // Global files
  const addFiles = useFileStore((state) => state.addFiles); // Add files globally
  const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
  const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

  const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
  const [flag, setFlag] = useState(true); // Visibility toggle
  const [rowClicked, setRowClicked] = useState(false); // Track if the row has been clicked

  console.log(rowClicked, "rowClicked");

  const handleAddFiles = (e, rowId) => {
    // Get the files that were selected
    const newFiles = Array.from(e.target.files).map((file) => ({
      name: file.name,
      file: file,
    }));

    // Update local state with new files
    setLocalFiles((prev) => [...prev, ...newFiles]);

    // Add new files to the global state
    addFiles(newFiles);

    console.log(
      rowId,
      "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&rrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    );

    addItDecId(rowId);

    console.log("Files added:", newFiles);
    console.log("Updated itDecId list:", itDecId); // This should now show the correct rowId values
  };

  // Handle file removal from local state
  const handleRemoveFile = (index) => {
    const removedFile = localFiles[index];
    setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
    removeFile(removedFile.name); // Remove from global state using unique file name
  };

  // Global Submit Handler
  const handleSubmit = () => {
    if (globalFiles.length === 0) {
      console.error("No files to upload");
      return;
    }

    const formData = new FormData();

    // Append all files to FormData
    globalFiles.forEach((fileObj) => {
      formData.append("files", fileObj.file); // Attach file objects
    });

    // Append all itDecId values to FormData
    globalITDECID.forEach((id) => {
      formData.append("itDecId", id); // Attach each itDecId
    });

    // Debugging: Check FormData contents
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    alert("Submitting files...");

    // Axios POST request
    axios
      .post(
        `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("Files uploaded successfully:", response.data);
        clearFiles(); // Clear global state after successful upload
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  };

  // Hide attachment section
  const handleOff = () => {
    setFlag(false);
  };

  const { submitFileStatus } = useStore();

  useEffect(() => {
    if (submitFileStatus === "true") {
      handleSubmit();
    }
  }, [submitFileStatus]);

  return (
    <div>
      {flag && (
        <div className="w-full border-[1px] border-black p-2">
          <div className="flex space-x-10 justify-between items-center">
            <div className="font-semibold">
              Attachments ({globalFiles.length})
            </div>
            <ImCross onClick={handleOff} className="cursor-pointer" />
          </div>
          <div className="border-b-2 border-gray-500 mb-4"></div>
          <div>
            {localFiles.map((file, index) => (
              <div key={index} className="flex space-x-10 items-center mb-2">
                <span>{file.name}</span>
                <BsTrash
                  onClick={() => handleRemoveFile(index)}
                  className="text-xl cursor-pointer text-red-500"
                />
              </div>
            ))}
            <Button
              component="label"
              variant="outlined"
              startIcon={<ImAttachment />}
            >
              Add Files
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleAddFiles(e, rowId)}
                multiple
              />
            </Button>
          </div>

          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={globalFiles.length === 0}
            >
              Submit All Files
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attachment;
