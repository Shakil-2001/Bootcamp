import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonLabel, IonGrid, IonRow, IonCol, IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) =>{
  return (
    <IonPage >

      <IonHeader>

        <IonToolbar id='header'>
          <IonTitle>Cool_Name</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent id='body' fullscreen>
        
        <IonToolbar id='searchbarCont'>
          <IonSearchbar id='searchbar' placeholder="Search Location..." />
        </IonToolbar>

      <IonGrid>


        <IonRow> 

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Daily Corona Cases</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                123,456
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Corona Cases Cured</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                987,654
              </IonCardContent>
            </IonCard>  
          </IonCol>

        </IonRow>

        <IonRow> 

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Daily Corona Cases</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                123,456
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Daily Corona Cases</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                123,456
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Corona Cases Cured</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                987,654
              </IonCardContent>
            </IonCard>  
          </IonCol>

        </IonRow>

        <IonRow> 

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Daily Cases</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                123,456
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol> 
            <IonCard id='cards'>
              <IonCardHeader>
                <IonCardTitle>Cured Cases</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                 987,654
              </IonCardContent>
            </IonCard>  
          </IonCol>

        </IonRow>

      </IonGrid>


      </IonContent>

      <IonFooter >

        <IonToolbar id='footer'>
          <IonLabel>Footer Stuff</IonLabel>
        </IonToolbar>

      </IonFooter>

    </IonPage>

  );
};
export default Home;