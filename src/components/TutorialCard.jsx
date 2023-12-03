import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

const TutorialCard0 = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>歡迎來到AI-EYES</IonCardTitle>
        <IonCardSubtitle>
          此系統主要目的為透過AI影像辨識技術
          協助視障者透過手機掃描找尋物品與描述場景
          以科技的方式降低視障者的不便性
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        若為第一次使用 螢幕下方有三步驟的操作教學 協助您操作系統
        請聽完這段話後向下滑動
      </IonCardContent>
    </IonCard>
  );
};
const TutorialCard1 = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>步驟一</IonCardTitle>
        <IonCardSubtitle>-</IonCardSubtitle>
        <IonCardTitle>將此網頁加入主畫面</IonCardTitle>
        <IonCardSubtitle>-</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        首先，請先將此網頁加入主畫面，AI-EYES將會以應用程式的形式顯示在主畫面，以利之後方便開啟操作
      </IonCardContent>
    </IonCard>
  );
};
const TutorialCard2 = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>步驟二</IonCardTitle>
        <IonCardSubtitle>-</IonCardSubtitle>
        <IonCardTitle>點擊右下角尋找物品按鈕</IonCardTitle>

        <IonCardSubtitle>-</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        若要啟動物品掃描功能，請點擊右下角尋找物品按鈕，載入物品辨識模型需要一點時間，並請允許AI-EYES取用您的相機
      </IonCardContent>
    </IonCard>
  );
};
const TutorialCard3 = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>步驟三</IonCardTitle>
        <IonCardSubtitle>-</IonCardSubtitle>
        <IonCardTitle>點擊開啟聲音按鈕</IonCardTitle>

        <IonCardSubtitle>-</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        啟用物品掃描功能後，請點擊螢幕中間的開啟聲音按鈕，系統會將掃瞄到的物品說出來，以協助使用者尋找物品
      </IonCardContent>
    </IonCard>
  );
};
export { TutorialCard0, TutorialCard1, TutorialCard2, TutorialCard3 };
