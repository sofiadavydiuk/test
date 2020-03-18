import React from "react";
import { Image } from "semantic-ui-react";

export default class FetchComanies extends React.Component {
  state = {
    loading: true,
    company: null,
    data: []
  };

  async componentDidMount() {
    const url = "https://recruitment.hal.skygate.io/companies";
    const response = await fetch(url);
    const data = await response.json();

    // this.setState({ company: data[0], loading: false });
    this.setState({ data: data });

    // console.log("data", data);
    // console.log("data[0]", data[0]);
    // console.log(this.state.company;
  }

  render() {
    return (
        <div className="companies">
          {this.state.data.map((item, index) => (
              <>
                <div className="company">
                  <Image
                      src="https://d3dbtvmfwwhlf2.cloudfront.net/pub/Marketing/WEBSITE+images/Hero+pictures/kemppi-company-facts-hero.jpg?c=hero_jpg"
                      size="large"
                  />
                  <p>
                    <b>Name: </b>
                    {item.name}{" "}
                  </p>
                  <p>
                    <b>City: </b>
                    {item.city}
                  </p>
                  <p>
                    <b>Identity number: </b>
                    {item.id}{" "}
                  </p>
                </div>
              </>
          ))}
        </div>
    );
  }
}