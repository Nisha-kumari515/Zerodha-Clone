import DropDownButton from "./DropDownButton";

function CreateTicket() {
  const items1 = [
    "Resident individual",
    "Minor",
    "Non Resident Indian (NRI)",
    "Company, Partnership, HUF and LLP",
    "Glossary",
  ];
  const items2 = [
    "Your Profile",
    "Account modification",
    "Client Master Report (CMR) and Depository Participant (DP)",
    "Nomination",
    "Transfer and conversion of securities",
  ];
  const items3 = [
    "IPO",
    "Trading FAQs",
    "Margin Trading Facility (MTF) and Margins",
    "Charts and orders",
    "Alerts and Nudges",
    "General",
  ];

  const items4 = [
    "Add money",
    "Withdraw money",
    "Add bank accounts",
    "eMandates",
  ];

  const items5 = [
    "Portfolio",
    "Corporate actions",
    "Funds statement",
    "Reports",
    "Profile",
    "Segments",
  ];

  const items6 = [
    "Mutual funds",
    "National Pension Scheme (NPS)",
    "Fixed Deposit (FD)",
    "Features on Coin",
    "Payments and Orders",
    "General",
  ];

  const announcements = [
    "Current Buybacks - August 2026",
    "Surveillance measure on scrips - August 2026",
  ];

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
  ];

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-8">
          <DropDownButton
            id="accountOpening"
            icon={<i className="fa-regular fa-circle-user me-3"></i>}
            title="Account Opening"
            items={items1}
          />
          <DropDownButton
            id="zerodhaAccount"
            icon={<i className="fa-regular fa-circle-user me-3"></i>}
            title="Your Zerodha Account"
            items={items2}
          />
          <DropDownButton
            id="kite"
            icon={<i class="fa-regular fa-square-caret-left"></i>}
            title="Kite"
            items={items3}
          />
          <DropDownButton
            id="funds"
            icon={<i class="fa-solid fa-indian-rupee-sign"></i>}
            title="Funds"
            items={items4}
          />
          <DropDownButton
            id="console"
            icon={<i className="fa-regular fa-circle-user me-3"></i>}
            title="Console"
            items={items5}
          />
          <DropDownButton
            id="coin"
            icon={<i className="fa-regular fa-circle-user me-3"></i>}
            title="Coin"
            items={items6}
          />
        </div>

        <div className="col-4">
          {/* Announcements */}
          <div
            className="p-3 mb-4"
            style={{
              backgroundColor: "#fff4e5",
              borderLeft: "8px solid #ff9800",
            }}
          >
            <ul className="mb-0">
              {announcements.map((item, index) => (
                <li key={index} className="mb-3">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border">
            <div className="p-3" style={{ backgroundColor: "#f5f5f5" }}>
              <h5 className="mb-0">Quick links</h5>
            </div>

            {quickLinks.map((item, index) => (
              <div key={index} className="p-3 border-top">
                <a href="#" style={{ textDecoration: "none" }}>
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
