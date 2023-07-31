import Image from "next/image";
import img1 from "../../../public/bg-intro-desktop.svg";
import img2 from "../../../public/image-mockups.png";
import img3 from "../../../public/bg-intro-mobile.svg";
const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="header-left">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="request-btn">
            <button> Request Invite</button>
          </div>
        </div>

        <div className="header-right">
          <div className="right-img">
            <div className="bg-img">
              <Image src={img1} className="desktop-bg" alt="bg" width={700} height={700} />
<Image src={img3} alt="bg" className="mobile-bg"/>
            </div>
            <div className="up-img">
              <Image src={img2} alt="mob-img" width={400} height={500} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
