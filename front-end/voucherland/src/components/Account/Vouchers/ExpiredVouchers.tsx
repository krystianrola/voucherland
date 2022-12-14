import React from "react";
import { IVoucher } from "../../../utils/types";

interface ExpiredVouchersProps {
  expired_vouchers: IVoucher[];
}

export default function ExpiredVouchers({ expired_vouchers }: ExpiredVouchersProps) {
  return (
    <article className="account_expired_vouchers">
      <h3>Expired</h3>
      <div className="expired_vouchers_content">{expired_vouchers}</div>
    </article>
  );
}
