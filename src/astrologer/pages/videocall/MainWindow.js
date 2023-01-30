import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import socket from './socket';


function useClientID() {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    socket
      .on('init', ({ id }) => {
        console.log("admin id", id)
        // document.title = `${id} - VideoCall`;
        setClientID(id);
      });
  }, []);

  return clientID;
}

function MainWindow({ startCall, astroId }) {
  const clientID = useClientID()
  const [friendID, setFriendID] = useState(null);


  useEffect(() => { 
    socket.emit('getid', astroId)
  }, [])


  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container main-window">
      <div>
        <h3>
          Hi, your ID is
          <input
            type="text"
            className="txt-clientId"
            defaultValue={clientID}
            readOnly
          />
        </h3>
        <h4>Get started by calling a Astrologer below </h4>
      </div>
      <div>
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Your friend ID"
          defaultValue={friendID}
          onChange={(event) => setFriendID(event.target.value)}
        />
        <div>
          <button
            type="button"
            className="btn-action fa fa-video-camera"
            onClick={callWithVideo(true)}
          />
          <button
            type="button"
            className="btn-action fa fa-phone"
            onClick={callWithVideo(false)}
          />
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
