import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//REACT-CORE
/*
import AppStatlessComponents from './react-core/1-AppStatlessComponents';
import AppClassComponents from './react-core/2-AppClassComponents';
import AppStateFullComponent from './react-core/3-AppStateFullComponent';
import AppLifeCicle from './react-core/4-AppLifeCicleComponent';
import AppEventsComponents from './react-core/5-AppEventsComponents';
import AppRenderConditionalsComponents from './react-core/6-AppRenderConditionalsComponents';
import AppLists from './react-core/7-AppLists';
import AppForms from './react-core/8-AppForms';
import AppFormsSubmitted from './react-core/9-AppFormsSubmitted';
import AppFormsSubmittedPt2 from './react-core/10-AppFormsSubmittedPt2';



//REACT HOOKS

import UseState from './react-hooks/1_useState';
import UseEffect from './react-hooks/2_useEffect';
import UseMemo from './react-hooks/3_useMemo';
import UseCallback from './react-hooks/4_useCallbacks';
*/


//REACT HTTPS REQUISITIONS
//import HttpsRequisitions from './react-https/1_httpsRequisitions';

//REACT ROUTES
import RoutesApp from './react-routes/1_routesApp';

//------------------------------------------------------------------
//RENDERS COMPONENTS

//1 - Statless Components
//ReactDOM.render(<AppStatlessComponents />, document.getElementById('root'));

//2 - Class Components
//ReactDOM.render(<AppClassComponents />, document.getElementById('root'));

//3 - States Components AppStateFullComponent
//ReactDOM.render(<AppStateFullComponent />, document.getElementById('root'));

//4 - AppLifeCicle
//ReactDOM.render(<AppLifeCicle />, document.getElementById('root'));

//5 - AppEventsComponents
//ReactDOM.render(<AppEventsComponents />, document.getElementById('root'));

//6 - AppRenderConditionalsComponents
//ReactDOM.render(<AppRenderConditionalsComponents />, document.getElementById('root'));

//7 - AppLists 
//ReactDOM.render(<AppLists />, document.getElementById('root'));

//8 - AppForms - Lidando com formulários e states
//ReactDOM.render(<AppForms />, document.getElementById('root'));


//9 - AppFormsSubmitted - Lidando com formulários e states e agrupando as informações para submeter
//ReactDOM.render(<AppFormsSubmitted />, document.getElementById('root'));


//10 - AppFormsSubmittedPt2 otimizandoas funções de setState
//ReactDOM.render(<AppFormsSubmittedPt2 />, document.getElementById('root'));


//------------------------------------------------------------------------------------------------------------

//REACT HOOKS
//1 - UseState (Uma forma mais otimizada de vc controlar os estados sem precisar ficar setando via setState).
//ReactDOM.render(<UseState />, document.getElementById('root'));

//2 - UseEffect (Hook q substitui os ciclos de ida didAMount e didUpdate antigos do react).
//ReactDOM.render(<UseEffect />, document.getElementById('root'));

//3 - UseMemo ().
//ReactDOM.render(<UseMemo />, document.getElementById('root'));

//4 - UseCallback ().
//ReactDOM.render(<UseCallback />, document.getElementById('root'));

//-----------------------------------------------------------------------------------------------------------
//REACT HTTPS REQUISITIONS
//ReactDOM.render(<HttpsRequisitions />, document.getElementById('root'))

//-----------------------------------------------------------------------------------------------------------
//REACT ROUTES
ReactDOM.render(<RoutesApp />, document.getElementById('root'))












// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
