// NPM Packages
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// Project files
import InputField from "components/InputField";
import fields from "data/fields-signup.json";
import { createAccount } from "scripts/authentification";
import { createDocumentWithId } from "scripts/fireStore";
import Logo from "assets/Netelix-logo.png";

export default function SignUp() {
  // Global state
  const history = useHistory();

  // Local state
  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: form.name, city: form.city, isAdmin: false };
    await createDocumentWithId("users", uid, newUser);
    alert("Your account is successfully created, please login now");
    history.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }
  // Components
  const InputFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <div id="signup-page">
      <header>
        <div className="signup-logo">
            <img src={Logo} alt=""/>
        </div>
        <div className="signin-link">
            <Link to="/">Sign In</Link>
        </div>
      </header>
      <div className="signup-page-content">
        <div className="signup-form">
            <h2>Create an account to start using Netelix</h2>
            <h3>Just this step and you're finished! We hate paperwork, too.</h3>
            <form onSubmit={onSubmit} className="form">
              {InputFields}
              <p>{errorMassage}</p>
              <button>Sign up</button>
            </form>
        </div>
      </div>
    </div>
  );
}