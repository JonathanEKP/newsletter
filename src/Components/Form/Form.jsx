import "./Form.css";
import mobileDesign from "../../assets/images/illustration-sign-up-mobile.svg";
import desktopDesign from "../../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../../assets/images/icon-list.svg";

function Form() {
  return (
    <section className="card border-0 ">
      <div className="card-body p-0 p-md-3">
        <div className="row g-0 d-flex">
          <div className="col-md-6 col-12 p-4 order-md-1 order-2">
            <h1 className="display-4 fw-bold title mt-md-5">Stay updated!</h1>

            <p className="mt-3">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <p>
              <span className="mx-2">
                <img src={iconList} alt="Icon of a list" />
              </span>
              Product discovery and building what matters
            </p>
            <p>
              <span className="mx-2">
                <img src={iconList} alt="Icon of a list" />
              </span>
              Measuring to ensure updates are a success
            </p>
            <p>
              <span className="mx-2">
                <img src={iconList} alt="Icon of a list" />
              </span>
              And much more!
            </p>

            <form className="form-group mt-md-4">
              <label htmlFor="email" className="form-label fw-bold">
                Email Adress
              </label>
              <input
                type="email"
                className="form-control w-100 p-3"
                placeholder="email@company.com"
                required
              />
              <button type="submit" className="btn btn-custom w-100 p-3 mt-3">
                {" "}
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          <div className="col-md-6 col-12 img-container order-md-2 order-1 ">
            <source media="(min-width: 767px" srcSet={mobileDesign} />
            <img src={desktopDesign} alt="Form Design Information" className="design"/>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Form;
