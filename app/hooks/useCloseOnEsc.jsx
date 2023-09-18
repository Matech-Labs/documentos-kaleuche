import { useEffect } from "react";

const useCloseOnEsc = (onClose) => {
  useEffect(() => {
    const closeGalleryOnEsc = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", closeGalleryOnEsc);
    return () => {
      window.removeEventListener("keydown", closeGalleryOnEsc);
    };
  }, [onClose]);
};

export default useCloseOnEsc;
