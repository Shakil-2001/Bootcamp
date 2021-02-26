import axios from "axios";

class covidAPI {
  AreaType = "nation";
  AreaName = "england";

  filters = [`areaType=${this.AreaType}`, `areaName=${this.AreaName}`];

  structure = {
    date: "date",
    name: "areaName",
    code: "areaCode",
    cases: {
      daily: "newCasesByPublishDate",
      cumulative: "cumCasesByPublishDate",
    },
    deaths: {
      daily: "newDeathsByPublishDate",
      cumulative: "cumDeathsByPublishDate",
    },
  };

  apiParams = `filters=${this.filters.join(";")}&structure=${JSON.stringify(this.structure)}`;
  encodedParams = encodeURI(this.apiParams);

  url = "https://api.coronavirus.data.gov.uk/v1/data";

  endpoint = `${this.url}?${this.encodedParams}`;

  getData() {
      return axios(this.endpoint)
  }
}

export default covidAPI;

/*
    const endpoint = `${this.url}?${this.encodedParams}`;

    const { data, status, statusText } = await axios(
      `${this.url}?${this.encodedParams}`
    );

    if (status >= 400) {
      throw new Error(statusText);
    }

    return data;
 */