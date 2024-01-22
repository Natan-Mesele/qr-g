import React, { useState } from "react";
import RegisterPopup from "../RegisterPopup";

function Cart() {
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

  const openRegisterPopup = () => {
    setRegisterPopupOpen(true);
  };

  const closeRegisterPopup = () => {
    setRegisterPopupOpen(false);
  };

  return (
    <div>
      {isRegisterPopupOpen && <RegisterPopup onClose={closeRegisterPopup} />}
    </div>
  );
}

export default Cart;
