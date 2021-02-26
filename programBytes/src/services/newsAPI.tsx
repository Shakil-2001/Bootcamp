import axios from "axios";

class newsAPI {
  baseUrl = "https://newsapi.org/v2/everything";
  apiKey = "dd906e0d01984574bb81ceb9d9225d8c";
  query = "coronavirus";
  dates = this.formatDate()
  endpoint = `${this.baseUrl}?q=${this.query}&from=${this.dates}+sortBy=popularity&apiKey=${this.apiKey}`


  formatDate(){
    var d = new Date();
    var formattedDate = d.toISOString().slice(0, 10);
    var lmao = formattedDate.split("-");
    lmao[2] = `${parseInt(lmao[2]) - 7}`;
    formattedDate = lmao[0] + "-" + lmao[1] + "-" + lmao[2];
    return formattedDate
  };

  getNews(){ //arrow function
    return axios(this.endpoint)
  }
}
export default newsAPI;

/*
'q=Apple&'
'from=2021-02-24&'
'sortBy=popularity&'
'apiKey=dd906e0d01984574bb81ceb9d9225d8c';
 */
