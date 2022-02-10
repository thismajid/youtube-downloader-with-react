import { useState } from "react";
import { toast } from "react-toastify";
import { download } from "../../services/downloadService";

const Inputs = ({ setIsLoading, history }) => {
  const [url, setUrl] = useState("");
  const notify = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const changeHandler = (e) => {
    setUrl(e.target.value);
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const ytRegex = new RegExp(
        "^(https?://)?(www.youtube.com|youtu.be)/.+$",
        "i"
      );
      if (ytRegex.test(url)) {
        setIsLoading(true);
        const { data } = await download(url);
        if (data) {
          setIsLoading(false);
          history.push({
            pathname: "/download",
            state: { data },
          });
        }
      } else {
        notify("URL is wrong ...");
      }
    } catch (err) {
      console.log(err);
      notify("Something went wrong ...");
    }
  };
  return (
    <div className="container my-5" id="main">
      <form className="my-5" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="float-start mb-2">
            Video Link from Youtube:
          </label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Video URL"
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3" id="download-btn">
          Download
        </button>
      </form>
    </div>
  );
};

export default Inputs;
