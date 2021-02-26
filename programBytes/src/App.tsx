import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { newspaperOutline, helpOutline, informationCircleOutline } from 'ionicons/icons';
import Cases from './pages/Cases';
import News from './pages/News';
import Help from './pages/Help';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import React from 'react';
import { StaticContext } from 'react-router';

/* Theme variables */
//import './theme/variables.css';

const App: React.FC = () => {
  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/cases">
            <Cases />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route exact path="/">
            <Redirect to="/cases" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" >
          <IonTabButton tab="tab1" href="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/cases">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Cases</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/help">
            <IonIcon icon={helpOutline} />
            <IonLabel>Help</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}
export default App;