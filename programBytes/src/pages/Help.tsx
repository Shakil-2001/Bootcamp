import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./Cases.css";
const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="header">
          <IonTitle id="title">Help</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen id="body">
        
      </IonContent>
    </IonPage>
  );
};

export default Help;
