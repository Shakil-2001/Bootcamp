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
  IonImg,
  IonCardSubtitle,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import newsAPI from "../services/newsAPI";

const News: React.FC = () => {
  const [titles, setTitles] = React.useState<any[]>([]);
  const [img = "", setImg] = React.useState(String);
  const [stories, setStories] = React.useState<any[]>([]);
  const [showAlert1, setShowAlert1] = React.useState(false); // alert

  React.useEffect(() => {
    const news = new newsAPI();
    news
      .getNews()
      .then((news) => {
        //console.log(news.data.articles);
        setStories(news.data.articles);
      })
      .catch((error) => {
        console.log(error);
        setShowAlert1(true);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="header">
          <IonTitle id="title">News</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen id="body">
        {stories.map((story) => (

          <IonCard id="cards" key = {story.url} href = {story.url} >
            <img src={story.urlToImage} />
            <IonCardHeader>
              <IonCardSubtitle>{story.description}</IonCardSubtitle>
              <IonCardSubtitle>Source : {story.source.name}</IonCardSubtitle>
              <IonCardTitle>{story.title}</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        
        ))}
      </IonContent>
    </IonPage>
  );
};

export default News;
