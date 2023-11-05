import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

const TutorialCard = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Here&rsquo;s a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
    );
}
export default TutorialCard;