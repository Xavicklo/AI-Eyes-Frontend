import React from "react";
import TutorialCard from "../components/TutorialCard";
import { IonGrid, IonRow, IonCol, IonHeader, IonSearchbar } from '@ionic/react';
import "@/style/HomePage.css"

const HomePage = () => {
    return (
        <>
            <IonHeader>
                <IonSearchbar animated={true} placeholder="Search"></IonSearchbar>
            </IonHeader>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol>
                        <TutorialCard>Home Page</TutorialCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <TutorialCard>Home Page</TutorialCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default HomePage;