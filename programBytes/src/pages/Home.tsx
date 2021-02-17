import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonLabel} from '@ionic/react';
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

        <img src='Assets\map_image.jpg' alt='Placeholder'></img>

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