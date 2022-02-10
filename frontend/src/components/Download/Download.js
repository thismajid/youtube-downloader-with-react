import "react-dropdown/style.css";
import { Link } from "react-router-dom";

const Download = ({ history }) => {
  const { data } = history.location.state;
  console.log(data);
  return (
    <div className="mt-3">
      <div className="container d-flex justify-content-center">
        <iframe
          className="d-flex"
          title={data.url}
          width="640"
          height="480"
          src={data.stream}
        ></iframe>
      </div>
      <div className="dropdown mt-3">
        <Link to="/">
          <button className="btn btn-outline-secondary me-3">Go to home</button>
        </Link>
        <a
          className="btn btn-dark dropdown-toggle"
          href="/download"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Download links
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {data.formats.map((format, index) => {
            return (
              <li key={index}>
                <a className="dropdown-item" href={format.url}>
                  {format.hasVideo
                    ? `${format.mimeType.split(";")[0]} ${format.height}`
                    : `${format.mimeType.split(";")[0]}`}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-primary dropdown-toggle text-center"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Download Links
        </button>
        {items}
      </div> */}
    </div>
  );
};

export default Download;
