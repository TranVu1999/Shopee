import React from "react";
import PropTypes from "prop-types";
import WidgetSidebar from "../../feature/User/WidgetSidebar";
import WidgetUserPortfolio from "../../feature/User/WidgetUserProfile";
import WidgetListAddress from "../../feature/User/WidgetListAddress";
import WidgetUpdatePassword from "../../feature/User/WidgetUpdatePassword";
import WidgetPurchase from "../../feature/User/WidgetPurchase";
import WidgetShopeeCoin from "../../feature/User/WidgetShopeeCoin";
import WidgetVoucher from "../../feature/User/WidgetVoucher";
import WidgetExpireVoucher from "../../feature/User/WidgetExpireVoucher";
import WidgetListNotification from "../../feature/User/WidgetListNotification";

UserPage.propTypes = {};

function UserPage(props) {
  return (
    <div className="mt-80 user-page-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <WidgetSidebar />
          </div>
          <div className="pl-5 col-lg-10">
            {/* <WidgetUserPortfolio/> */}
            {/* <WidgetListAddress/> */}
            {/* <WidgetUpdatePassword/> */}
            {/* <WidgetPurchase/> */}
            {/* <WidgetShopeeCoin /> */}
            {/* <WidgetVoucher/> */}
            {/* <WidgetExpireVoucher/> */}
            <WidgetListNotification/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
