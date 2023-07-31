import Image from "next/image";

export const EasySection = () => {
  const easyBankData = [
    {
      imgSrc: "/icon-online.svg",
      title: "Online Banking",
      detail: ` Our modern web and mobile applications allow you to keep track of your finances 
      wherever you are in the world.`,
    },
    {
      imgSrc: "/icon-budgeting.svg",
      title: "Simple Budgeting",
      detail: ` See exactly where your money goes each month. Receive notifications when you’re 
      close to hitting your limits.`,
    },
    {
      imgSrc: "/icon-onboarding.svg",
      title: "Fast Onboarding",
      detail: ` We don’t do branches. Open your account in minutes online and start taking control 
      of your finances right away.`,
    },
    {
      imgSrc: "/icon-api.svg",
      title: " Open API",
      detail: ` Manage your savings, investments, pension, and much more from one account. Tracking 
      your money has never been easier.`,
    },
  ];
  return (
    <div className="easy-section">
      <div className="container">
        <div className="easy-head-title">
          <h1>Why choose Easybank?</h1>
          <p>
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <section>
          {easyBankData.map((item, index) => (
            <div className="easy-item" key={index}>
              <div className="image">
                <Image src={item.imgSrc} alt="img" width={50} height={50} />
              </div>

              <h3 className="head-title">{item.title}</h3>

              <p>{item.detail}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
