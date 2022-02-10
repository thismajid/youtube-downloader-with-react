const Inputs = () => {
  return (
    <div className="container my-5" id="main">
      <form className="my-5">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Video Link from Youtube: </label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Video URL"
            id="url"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          id="download-btn"
        >
          Download
        </button>
      </form>
    </div>
  );
};

export default Inputs;
