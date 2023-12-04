import React from "react";
import {
  TutorialCard0,
  TutorialCard1,
  TutorialCard2,
  TutorialCard3,
} from "../components/TutorialCard";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "@/style/HomePage.css";
import eyeLogo from "../pic/eye-logo.png";

const HomePage = () => {
  return (
    <IonContent>
      <IonToolbar className="custom-toolbar">
        <IonTitle>
          <div className="logo">
            <img src={eyeLogo} alt="AI-EYES Logo" className="ai-icon" />
            AI-EYES
          </div>
        </IonTitle>
      </IonToolbar>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol>
            <TutorialCard0>Home Page</TutorialCard0>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <TutorialCard1>Home Page</TutorialCard1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <TutorialCard2>Home Page</TutorialCard2>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <TutorialCard3>Home Page</TutorialCard3>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default HomePage;
