import React from 'react'
import ReactBpmn from 'react-bpmn';
import axios from 'axios'

class ExternalLoadedBpmn extends React.Component {

    constructor(props) {
      super(props);

      this.state = {};

      const { url } = props;
      
      fetch(url).then(res => res.text()).then(diagramXML => {
        this.setState({
          diagramXML
        });
      });


    }

    render() {

      const {
        onError,
        onShown,
        onLoading
      } = this.props;

      const { diagramXML } = this.state;

      console.log("ExternalLoadedBpmn is rendering",this.state);      

      return (
        diagramXML
          ? <ReactBpmn
              diagramXML={ diagramXML }
              onLoading={ onLoading }
              onShown={ onShown }
              onError={ onError }
            />
          : null
      );
    }

  }

export default ExternalLoadedBpmn
