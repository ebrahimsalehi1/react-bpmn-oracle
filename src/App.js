import React from 'react'
//import ReactBpmn from 'react-bpmn';
import ExternalLoadedBpmn from './ExternalLoadedBpmn'
import axios from 'axios'

function App(){
    function onShown() {
        console.log('diagram shown');
      }
      
      function onLoading() {
        console.log('diagram loading');
      }
     
      function onError(err) {
        console.log('failed to show diagram',err);
      }
     
      return (
        <div>
        <ExternalLoadedBpmn
          url="http://localhost:5000/bpmnio"
          onShown={ onShown }
          onLoading={ onLoading }
          onError={ onError }
        />

        </div>
      );
} 

export default App
