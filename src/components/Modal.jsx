import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;



////* *** Custom Modal Component with Imperative Handle for Opening and Closing ***
// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default Modal;