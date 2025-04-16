import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 className="text-2xl">❌ Payment Cancelled</h1>
      <p className="text-xl">You cancelled the payment. Try again anytime.</p>
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-600 ease-in-out duration-150"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default Cancel;
