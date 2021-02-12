import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonButton,
    IonIcon 
} from '@ionic/react';
import {  logoGoogle } from 'ionicons/icons';
import React from 'react';

const Gnomed: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonImg src={'https://i.kym-cdn.com/entries/icons/original/000/025/526/gnome.jpg'} />
            <IonContent>
                <h1>You've been gnomed</h1>
                <IonButton expand="block" href="https:/www.google.com">
                    <IonIcon icon={logoGoogle} />
                     Na really click here for google 
                    <IonIcon icon={logoGoogle} />
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Gnomed;