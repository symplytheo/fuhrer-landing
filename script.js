document.addEventListener("DOMContentLoaded", function () {
  const ABOUT = [
    {
      image: "images/invoice.png",
      title: "Bill Payment Integration",
      subtitle:
        "Effortlessly manage your expenses with Fuhrer's integrated bill payment system. Simplify your financial tasks in just a few clicks.",
    },
    {
      image: "images/money.png",
      title: "Secure Crypto Transactions",
      subtitle:
        "Safely buy, sell, and manage your cryptocurrencies with Fuhrer's secure transaction platform. Your digital assets, protected.",
    },
    {
      image: "images/bank-transfer.png",
      title: "Local Bank Transfers",
      subtitle:
        "Easily transfer funds between local bank accounts with Fuhrer's seamless integration. Enjoy secure, hassle-free transactions at your fingertips.",
    },
    {
      image: "images/login.png",
      title: "User-Friendly Interface",
      subtitle:
        "Navigate the world of finance effortlessly with Fuhrer's intuitive interface. Experience convenience and ease in every transaction.",
    },
  ];

  const aboutList = document.querySelector("#about ul");
  aboutList.innerHTML = ABOUT.map(
    (item, i) => `
      <li>
        <div class="icon">
          <img src=${item.image} />
        </div>
        <div>
          <h4>${item.title}</h4>
          <p> ${item.subtitle}</p>
        </div>
      </li>
    `
  ).join("");

  // copyright
  const copyrightContent = `
      <p>&copy; ${new Date().getFullYear()} Fuhrer. All rights reserved.</p>
  `;
  const copyrightElement = document.querySelector("footer > div > p.copyright");
  copyrightElement.innerHTML = copyrightContent;
});
