import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from "../../action/countries";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';
import Meta from "../../Utils/Meta";


class Countries extends Component {

  // static fetching({ dispatch }) {
  //   return [dispatch(fetchCountries())];
  // }
  componentWillMount() {
    this.props.dispatch(fetchCountries());
  }

  componentDidMount() {
    const { Countries: { data } } = this.props;

    if (!data || data.length === 0) {
      this.props.dispatch(fetchCountries());
    }
  }


  render() {
    const { Countries: { isFetching, data } } = this.props;

    if (isFetching) {
      return <Loading />
    }

    const metaData = {
      authors: "Authors",
      title: "Home Title: Countries",
      description: "countries description",
      lastModified: "some date",
      altTitle: "some alt-title",
      canonical: "http://countries-canonical-url.com"
    };

    return (
      <React.Fragment>
        <Meta data={metaData} />
        <div className="container">
          <div className="countries-container">
            {data.map((item, i) => <CountriesItem key={i} {...item} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
};
const mapStateToProps = state => {
  return {
    Countries: state.Countries
  };
};

export default connect(
  mapStateToProps
)(Countries);