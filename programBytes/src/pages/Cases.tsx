import {
  IonAlert,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  //IonButton,
  IonItem,
} from "@ionic/react";

//import { RouteComponentProps } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Cases.css";
import covidAPI from "../services/covidAPI";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home: React.FC = () => {
  const [newCases = "", setNewCases] = React.useState(String);
  const [newCasesArr = "", setNewCasesArr] = React.useState<number[]>([]);
  const [cumCasesArr = "", setCumCasesArr] = React.useState<number[]>([]);
  const [cumCases = "", setCumCases] = React.useState(String); //haha cum lmao
  const [newDeaths = "", setNewDeaths] = React.useState(String);
  const [cumDeaths = "", setCumDeaths] = React.useState(String); ////haha cum again

  const [location = "", getLocation] = React.useState(String);
  const [showAlert1, setShowAlert1] = React.useState(false); // alert
  const [searchText, setSearchText] = React.useState("");

  const [options, setOptions] = React.useState();
  const [weeklyData, setWeeklyData] = React.useState<any>({});
  const [monthlyData, setMonthlyData] = React.useState<any>({});
  const [yearlyData, setYearlyData] = React.useState<any>({});

  var yearlyCases: any[] = [];
  var monthlyCases: any[] = [];
  var weeklyCases: any[] = [];

  var yearlyDates: any[] = [];
  var monthlyDates: any[] = [];
  var weeklyDates: any[] = [];

  /* 
  If you see .toLocaleString() it basically formats the number to have the comma where ever the thousands are and shit.
  In the services folder is where the COVID API file is located and contains the data retrieval.

  TODO:
  - Go global
  - Figure out how to allow users to see certain areas
  - Potentially add different tabs with graphs
  - Make it look more vibrant
  */

  ////////////////////////////////////////////////////////
  React.useEffect(() => {
    const covid = new covidAPI();
    covid
      .getData()
      .then((result) => {
        setNewCases(result.data.data[0].cases.daily);
        setCumCases(result.data.data[0].cases.cumulative);
        setNewDeaths(result.data.data[0].deaths.daily);
        setCumDeaths(result.data.data[0].deaths.cumulative);
        getLocation(result.data.data[0].name);

        result.data.data.forEach((data: any) => {
          //setNewCasesArr((old) => [...old, data.cases.daily]);
        });

        for (var i = 364; i >= 0; i--) {
          yearlyCases.push(result.data.data[i].cases.daily);
          yearlyDates.push(result.data.data[i].date);
          if (i < 30) {
            monthlyCases.push(result.data.data[i].cases.daily);
            monthlyDates.push(result.data.data[i].date);
          }
          if (i < 7) {
            weeklyCases.push(result.data.data[i].cases.daily);
            weeklyDates.push(result.data.data[i].date);
          }
        }

        setWeeklyData({
          labels: weeklyDates,
          datasets: [
            {
              label: "Daily Cases",
              data: weeklyCases,
            },
          ],
        });

        setMonthlyData({
          labels: monthlyDates,
          datasets: [
            {
              label: "Daily Cases",
              data: monthlyCases,
            },
          ],
        });

        setYearlyData({
          labels: yearlyDates,
          datasets: [
            {
              label: "Daily Cases",
              data: yearlyCases,
            },
          ],
        });
      })

      .catch((error) => {
        console.log(error);
        setShowAlert1(true);
      });
  }, []);
  //////////////////////////////////////////////////////////////////////
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="header">
          <IonTitle id="title">COVID Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent id="body" fullscreen>
        <IonToolbar id="searchbarCont">
          <IonSearchbar
            id="searchbar"
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            placeholder="Search Location..."
          />
        </IonToolbar>

        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={"Error"}
          subHeader={"Cannot connect to server"}
          message={
            "Unable to connect to the server. Please check your internet connection"
          }
          buttons={["OK"]}
        />

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Daily Corona Cases</IonCardTitle>
                </IonCardHeader>

                <IonCardContent id="card1test">
                  {newCases.toLocaleString()}
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Total Corona Cases</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>{cumCases.toLocaleString()}</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Daily Corona Deaths</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{newDeaths.toLocaleString()}</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Total Corona Deaths</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{cumDeaths.toLocaleString()}</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <IonCard id="cards">
                    <IonCardContent>
                      <IonCardTitle>
                        Daily Cases Over a 7 Day Period{" "}
                      </IonCardTitle>
                      <Line data={weeklyData} />
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                  <IonCard id="cards">
                    <IonCardContent>
                      <IonCardTitle>
                        Daily Cases Over a Monthly Period{" "}
                      </IonCardTitle>
                      <Line data={monthlyData} />
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                  <IonCard id="cards">
                    <IonCardContent>
                      <IonCardTitle>
                        Daily Cases Over a Yearly Period{" "}
                      </IonCardTitle>
                      <Line data={yearlyData} />
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>


              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonItem href="https://www.nhs.uk/conditions/coronavirus-covid-19/">
                  <IonLabel>NHS Guidelines</IonLabel>
                  <IonIcon
                    slot="end"
                    name="information-circle-outline"
                  ></IonIcon>
                </IonItem>
                <IonItem>
                  <IonLabel>Almond Milk! But no Nipples?</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Amazing world of Gumball</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>cool kids only</IonLabel>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Placeholder</IonCardTitle>
                </IonCardHeader>

                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Placeholder</IonCardTitle>
                </IonCardHeader>

                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar id="footer">
          <IonLabel>Location set to {location}</IonLabel>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

/*
                  <IonCard id="cards">
                    <IonCardContent>
                      <IonCardTitle>
                        Daily Cases Over a 7 Day Period{" "}
                      </IonCardTitle>
                      <Line data={weeklyData} />
                    </IonCardContent>
                  </IonCard>
 */
