import Image from "next/image";

const Articals = () => {
  const articalData = [
    {
      imgSrc: "/image-currency.jpg",
      writer: "By Claire Robinson",
      heading: "Receive money in any currency with no fees",
      desc: `"The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …"`,
    },
    {
      imgSrc: "/image-restaurant.jpg",
      writer: "By Wilson Hutton",
      heading: "Treat yourself without worrying about money",
      desc: `"Our simple budgeting feature allows you to separate out your spending and set 
      realistic limits each month. That means you …`,
    },
    {
      imgSrc: "/image-plane.jpg",
      writer: "By Wilson Hutton",
      heading: "Take your Easybank card wherever you go",
      desc: `"We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
      while you’re abroad. We’ll even show you …`,
    },
    {
      imgSrc: "/image-confetti.jpg",
      writer: "By Claire Robinson",
      heading: "Our invite-only Beta accounts are now live!",
      desc: ` After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
      It’s easy to request an invite through the site ...`,
    },
  ];
  return (
    <section>
      <div className="articals">
        <div className="container">
          <div className="section-title">
            <h1> Latest Articles</h1>
          </div>
          <div className="artical-main">
            {articalData.map((item, index) => (
              <div className="artical-box">
                <div className="artical-img">
                  <Image src={item.imgSrc} alt="img" width={300} height={250} />
                </div>
                <div className="artical-content">
                  <p className="writer">{item.writer}</p>
                  <h4>
                    <a href="/">{item.heading}</a>
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articals;
