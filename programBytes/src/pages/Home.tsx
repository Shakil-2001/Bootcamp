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
} from "@ionic/react";

import { RouteComponentProps } from "react-router-dom";
import "./Home.css";
import covidAPI from "../services/covidAPI";
import React from "react";

const Home: React.FC<RouteComponentProps> = (props) => {

  const [newCases = "", setNewCases] = React.useState(String);
  const [cumCases = "", setCumCases] = React.useState(String); //haha cum lmao
  const [newDeaths = "", setNewDeaths] = React.useState(String);
  const [cumDeaths = "", setCumDeaths] = React.useState(String); ////haha cum again
  const [location = "", getLocation] = React.useState(String);
  const [showAlert1 , setShowAlert1] = React.useState(false); // alert

  /* 
  If you see .toLocaleString() it basically formats the number to have the comma where ever the thousands are and shit.
  In the services folder is where the COVID API file is located and contains the data retrieval.

  TODO:
  - Need to fix the button popping up multiple times
  - Go global
  - Figure out how to allow users to see certain areas
  - Potentially add different tabs with graphs / news
  - Make it look more vibrant
  */

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
      })
      .catch((error) => {
        console.log(error);
        setShowAlert1(true)
      });
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="header">
          <IonTitle>COVID Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent id="body" fullscreen>
        <IonToolbar id="searchbarCont">
          <IonSearchbar id="searchbar" placeholder="Search Location..." />
        </IonToolbar>

        <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        header={'Error'}
        subHeader={'Cannot connect to server'}
        message={'Unable to connect to the server. Please check your internet connection'}
        buttons={['OK']}
      />

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Daily Corona Cases</IonCardTitle>
                </IonCardHeader>

                <IonCardContent id="card1test">
                  {newCases.toLocaleString()}{" "}
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
                  <IonCardTitle>Placeholder</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>123,456</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Placeholder</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>123,456</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Placeholder</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>987,654</IonCardContent>
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
