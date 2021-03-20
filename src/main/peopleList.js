import React, { useState, useEffect } from "react";
import PeopleCard from "./peopleCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { peopleList } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const PeopleList = (props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);
  const searchHandler = (event) => {
    const data = event.target.value;
    const result = people.results.filter((item) => {
      return (
        item.email.includes(data.toLowerCase()) ||
        item.name.first.includes(data.toLowerCase())
      );
    });
    setSearch(result);
  };
  const { peopleList, people } = props;
  useEffect(() => {
    peopleList(page);
    setData(people);
  }, [page]);
  console.log(data, "indide people");
  return (
    <>
      <div className="search-input">
        <input type="text" placeholder="search people..." onChange={(event)=>searchHandler(event)}/>
      </div>
      <Card>
        <button onClick={() => setPage(page - 1)}>prv {page - 1}</button>
        <button onClick={() => setPage(page + 1)}>next {page}</button>
        <CardContent className="list-header">
          <div>Profile Image</div>
          <div>Name</div>
          <div>Email</div>
          <div>City</div>
          <div>State</div>
        </CardContent>
      </Card>
      {search
        ? search.map((item, index) => {
            console.log(item, "inside ");
            return <PeopleCard item={item} key={index} />;
          })
        : people &&
          people.results.map((item, index) => {
            console.log(item, "inside ");
            return <PeopleCard item={item} key={index} />;
          })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    {
      peopleList,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapActionToProps)(PeopleList);
