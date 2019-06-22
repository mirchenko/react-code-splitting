import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchCountry } from "../../action/countries";
import { Loading } from "../../common";
import Meta from "../../Utils/Meta";


class Country extends Component {

  // static fetching({ dispatch, path }) {
  //   return [this.props.dispatch(fetchCountry(path.substr(1)))];
  // }
  componentWillMount() {
    this.props.dispatch(fetchCountry(this.props.match.params.name));
  }

  componentDidMount() {
    this.props.dispatch(fetchCountry(this.props.match.params.name));
  }

  render() {
    const { Country: { isFetching, flag, name, nativeName, capital, region, population, languages } } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    const metaData = {
      authors: "Authors",
      title: name,
      description: "country description",
      lastModified: "some date",
      altTitle: "some alt-title",
      canonical: "http://country-canonical-url.com"
    };

    return (
      <React.Fragment>
        <Meta data={metaData} />
        <div className="container">
          <div className="country-container">
            <img src={flag} alt="" />
            <div className="country-data">
              <div className="country-data-item">
                <span>Name: </span>
                <span>{name}</span>
              </div>
              <div className="country-data-item">
                <span>NativeName: </span>
                <span>{nativeName}</span>
              </div>
              <div className="country-data-item">
                <span>Capital: </span>
                <span>{capital}</span>
              </div>
              <div className="country-data-item">
                <span>Region: </span>
                <span>{region}</span>
              </div>

              <div className="country-data-item">
                <span>Population: </span>
                <span>{population}</span>
              </div>
            </div>
            <hr />

            <div className="languages-container">
              {languages.map((item, i) => <span key={i}>{item.name}</span>)}
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Country: state.Country
  };
};

export default connect(
  mapStateToProps
)(Country);
