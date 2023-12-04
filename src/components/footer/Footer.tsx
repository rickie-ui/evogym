import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Join our vibrant community and experience a place where health,
            empowerment, and camaraderie thrive. Your journey to a stronger,
            healthier you starts here at Evogym.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Membership</p>
          <p className="my-5">Facilities</p>
          <p>Services</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            500 Terry Francine St. San Francisco, CA 94158.
          </p>
          <p>+(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
