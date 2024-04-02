// // Create a Zustand store to manage the files state globally
// import { create } from "zustand"; // create from "zustand";

// const useFileStore = create((set) => ({
//   files: [],
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (index) =>
//     set((state) => ({ files: state.files.filter((_, i) => i !== index) })),
// }));

// export default useFileStore;

// import { create } from "zustand";

// const useFileStore = create((set) => ({
//   files: [],
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (index) =>
//     set((state) => ({ files: state.files.filter((_, i) => i !== index) })),
// }));

// export default useFileStore;

// import { create } from "zustand";

// const useFileStore = create((set) => ({
//   files: [],
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (index) =>
//     set((state) => ({ files: state.files.filter((_, i) => i !== index) })),
//   clearAllFiles: () => set({ files: [] }), // New action to clear all files

//   regime: "",
//   setRegime: (value) => set({ regime: value }),
// }));

// export default useFileStore;

// import { create } from "zustand";

// const useFileStore = create((set) => ({
//   files: [],
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (index) =>
//     set((state) => ({ files: state.files.filter((_, i) => i !== index) })),
//   clearAllFiles: () => set({ files: [] }), // New action to clear all files

//   regime: "Old Regime",
//   setRegime: (value) => set({ regime: value }),
// }));

// export default useFileStore;

import { create } from "zustand";

const useFileStore = create((set) => {
  // Get the regime value from local storage, or use the default value
  const storedRegime = localStorage.getItem("regime") || "Old Regime";

  return {
    files: [],
    addFiles: (newFiles) =>
      set((state) => ({ files: [...state.files, ...newFiles] })),
    removeFile: (index) =>
      set((state) => ({ files: state.files.filter((_, i) => i !== index) })),
    clearAllFiles: () => set({ files: [] }),

    regime: storedRegime, // Initialize regime with the stored value

    setRegime: (value) => {
      // Update the local storage value when setting the regime
      localStorage.setItem("regime", value);
      set({ regime: value });
    },
  };
});

export default useFileStore;
