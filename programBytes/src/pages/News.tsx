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
  IonButton,
  IonItem,
} from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';

const News: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar id="header">
            <IonTitle id="title">News</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen id="body">

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Daily Corona Cases</IonCardTitle>
                </IonCardHeader>

                <IonCardContent id="card1test">
                
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Total Corona Cases</IonCardTitle>
                </IonCardHeader>

                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>

          <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Daily Corona Deaths</IonCardTitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard id="cards">
                <IonCardHeader>
                  <IonCardTitle>Total Corona Deaths</IonCardTitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>

          </IonRow>

          <IonRow>
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
                  <IonLabel>Amazing world of Gumbball</IonLabel>
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
      </IonPage>
    );
  };

export default News;

/*
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
                  <IonLabel>Amazing world of Gumbball</IonLabel>
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
 */