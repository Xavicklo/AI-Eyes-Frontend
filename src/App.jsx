import React from "react";
import HomePage from "./pages/HomePage";
import WebcamPage from "./pages/WebcamPage";
import '@ionic/react/css/core.css';
import '@/style/App.css'

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { setupIonicReact, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/react';
import { homeOutline, radio } from 'ionicons/icons';
setupIonicReact();

const App = () => {
    console.log("App")
    return (
        <ion-app>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" render={() => <HomePage />} exact={true} />
                        <Route path="/webcam" render={() => <WebcamPage />} exact={true} />
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={homeOutline} />
                            <IonLabel>主頁</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="webcam" href="/webcam">
                            <IonIcon icon={radio} />
                            <IonLabel>尋找物品</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </ion-app>
    );
};

export default App;
