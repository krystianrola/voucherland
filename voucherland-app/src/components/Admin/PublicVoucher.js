import React from "react";

import { FaLockOpen, FaDownload } from "react-icons/fa";
import { FiDownload, FiClock } from "react-icons/fi";

export default function PublicVoucher() {
  return (
    <section className="public_voucher">
        <article className="voucher_info">
          <div className="checkbox" />
          <p className="voucher_tag">ABC1</p>
          <div className="voucher_store_image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"
              alt="Colruyt"
            />
          </div>
          <p className="product_name">Komkommers</p>
          <div className="voucher_discount">-20%</div>
          <div className="voucher_downloads">
            <FiDownload /> 955
          </div>
        </article>

        <article className="voucher_category">
          <div className="voucher_lock">
            <FaLockOpen />
          </div>
          <div className="voucher_deadline">
            <FiClock /> fr 18feb, 18h00
          </div>
        </article>
    </section>
  );
}
