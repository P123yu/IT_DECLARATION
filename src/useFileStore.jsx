// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

// const useFileStore = create((set) => ({
//   files: [], // Global file list
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (fileName) =>
//     set((state) => ({
//       files: state.files.filter((file) => file.name !== fileName),
//     })),
//   clearFiles: () => set({ files: [] }),
//   // Clear all files
// }));

// const useStore = create(
//   persist(
//     (set) => ({
//       submitFileStatus: false,
//       setSubmitFileStatus: (value) => set({ submitFileStatus: value }),
//     }),
//     {
//       name: "submit-file-satus",
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

// export { useFileStore, useStore };

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// // Zustand store for managing file-related state
// const useFileStore = create((set) => ({
//   files: [], // Global file list
//   addFiles: (newFiles) =>
//     set((state) => ({ files: [...state.files, ...newFiles] })),
//   removeFile: (fileName) =>
//     set((state) => ({
//       files: state.files.filter((file) => file.name !== fileName),
//     })),
//   clearFiles: () => set({ files: [] }), // Clear all files
//   // clearAllFiles: () => set({ files: [] }),
// }));

// Zustand store for managing files and itDecId state
const useFileStore = create((set) => ({
  files: [], // Global file list
  itDecId: [], // List to store itDecId values

  // Methods for managing files
  addFiles: (newFiles) =>
    set((state) => ({ files: [...state.files, ...newFiles] })),
  removeFile: (fileName) =>
    set((state) => ({
      files: state.files.filter((file) => file.name !== fileName),
    })),
  clearFiles: () => set({ files: [] }),

  // Methods for managing itDecId
  addItDecId: (id) => set((state) => ({ itDecId: [...state.itDecId, id] })),
  removeItDecId: (id) =>
    set((state) => ({
      itDecId: state.itDecId.filter((existingId) => existingId !== id),
    })),
  clearItDecIds: () => set({ itDecId: [] }),
}));

export default useFileStore;

// Zustand store for managing submission status, persisted to session storage
const useStore = create(
  persist(
    (set) => ({
      submitFileStatus: false,
      setSubmitFileStatus: (value) => set({ submitFileStatus: value }),
    }),
    {
      name: "submit-file-status", // Storage key
      storage: createJSONStorage(() => sessionStorage), // Use session storage
    }
  )
);

// Zustand store for managing submission status, persisted to session storage
const useStoreFinancialYear = create(
  persist(
    (set) => ({
      submitFinancialYear: "",
      setSubmitFinancialYear: (value) => set({ submitFinancialYear: value }),
    }),
    {
      name: "financial-year", // Storage key
      storage: createJSONStorage(() => sessionStorage), // Use session storage
    }
  )
);

// const useStoreExistingEmpIdAndFinancialYearStatus = create(
//   persist(
//     (set) => ({
//       empIdAndFinancialYearStatus: "",
//       setEmpIdAndFinancialYearStatus: (value) =>
//         set({ empIdAndFinancialYearStatus: value }),
//     }),
//     {
//       name: "empid-financialyear-status", // Storage key
//       storage: createJSONStorage(() => sessionStorage), // Use session storage
//     }
//   )
// );

const useStoreSaveStatusSection80c = create(
  persist(
    (set) => ({
      saveStatusSection80C: "",
      setSaveStatusSection80C: (value) => set({ saveStatusSection80C: value }),
    }),
    {
      name: "savestatus80c",
      storage: createJSONStorage(() => localStorage), // Use session storage
    }
  )
);

// Export the stores as named exports
export {
  useFileStore,
  useStore,
  useStoreFinancialYear,
  useStoreSaveStatusSection80c,
};
