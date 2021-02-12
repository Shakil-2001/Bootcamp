import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonIcon,IonFab, IonFabButton,IonButton } from '@ionic/react';
import { add, basketball } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) =>{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <IonList>
      <IonItem>
        <IonLabel>
          <h1>Hello World</h1>
        </IonLabel>
      </IonItem>
      <IonButton  expand="block" onClick={() => props.history.push('/gnomed')}>
        <IonIcon icon={basketball} />
        Click for google
        <IonIcon icon={basketball} />
      </IonButton>
    </IonList>
  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton onClick={() => props.history.push('/new')}>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>
  </IonContent>
    </IonPage>
  );
};
export default Home;