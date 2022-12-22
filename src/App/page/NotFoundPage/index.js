const NotFoundPage = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row page_error">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="error_img">
            {/* <img src="/images/error-404.jpg" alt="error" /> */}
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 error_Block-content">
          <div className="error_content">
            <p>Error code: 404</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
