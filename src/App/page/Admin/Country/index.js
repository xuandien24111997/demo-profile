import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./components/Table";
import BasketModal from "./components/CountryModal";

const Country = ({
  getList,
  loading,
  countries,
  deleteCountry,
  create,
  update
}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [params, setParams] = useState({});

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="languages">
      <p className="page-title">Country</p>
      <div className="languages__body">
        <div className="header-search d-flex justify-content-end mb-4">
          <div className="module-add-task header-search__create header-search__mt">
            <Button
              className="jr-btn btn-block"
              variant="contained"
              style={{
                backgroundColor: "#927c04",
                color: "#FFFFFF",
                textTransform: "none",
                fontFamily: "OpenSans-Regular",
              }}
              aria-label="add"
              onClick={() => {
                setParams({});
                setIsVisibleModal(true);
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Country</span>
            </Button>
          </div>
        </div>

        <div className="table">
          <div className="component-table__table-detail">
            <table className="table-component">
              <tr className="table-component__title">
                <th
                  className="title-thead title-thead-left"
                  style={{ width: "34.33%" }}
                >
                  Name
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25.9%" }}
                >
                  Date Created
                </th>
                <th
                  className="title-thead title-thead-right"
                  style={{ width: "5.59%" }}
                >
                  {}
                </th>
              </tr>
              {countries?.length ? (
                countries.map((data, index) => {
                  return (
                    <Table
                      key={data.id}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setParams={setParams}
                      deleteLanguageAdminAction={deleteCountry}
                    />
                  );
                })
              ) : (
                <tr className="table-component__title">
                  <td
                    className="title-tbody"
                    colSpan="4"
                    style={{ textAlign: "center" }}
                  >
                    no data
                  </td>
                </tr>
              )}
            </table>
          </div>
          <div className="loading">{loading && <CircularProgress />}</div>
        </div>
      </div>
      <BasketModal
        params={params}
        setParams={setParams}
        isVisibleModalArea={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        createAction={create}
        updateAction={update}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListCountryAction,
    deleteCountryAdminAction,
    createCountryAdminAction,
    updateCountryAdminAction
  } = require("redux/adminCountryRedux");
  return {
    getList: (data) => dispatch(getListCountryAction(data)),
    deleteCountry: (id) => dispatch(deleteCountryAdminAction(id)),
    create: (data) => dispatch(createCountryAdminAction(data)),
    update: (id, data) => dispatch(updateCountryAdminAction(id, data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.country.loading,
  countries: state.country.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
