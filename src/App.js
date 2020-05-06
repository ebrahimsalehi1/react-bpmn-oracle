import React from 'react'
import ReactBpmn from 'react-bpmn';

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
        <ReactBpmn
          url="/public/diagram.bpmn"
          onShown={ onShown }
          onLoading={ onLoading }
          onError={ onError }
        />
      );
}

export default App
