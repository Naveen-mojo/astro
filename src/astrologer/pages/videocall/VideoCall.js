import React, { Component } from 'react';
import _ from 'lodash';
import socket from './socket';
import PeerConnection from './PeerConnection';
import MainWindow from './MainWindow';
import CallWindow from './CallWindow';
import CallModal from './CallModal';



class VideoCall extends Component {
    constructor() {
        super();
        this.state = {
            callWindow: '',
            callModal: '',
            callFrom: '',
            localSrc: null,
            peerSrc: null,
            startTime: '',
            endTime: ''

        };
        this.pc = {};
        this.config = null;
        this.startCallHandler = this.startCall.bind(this);
        this.endCallHandler = this.endCall.bind(this);
        this.rejectCallHandler = this.rejectCall.bind(this);
        this.videoCall = this.videoCallStart.bind(this)
    }

    componentDidMount() {
        socket
            .on('request', ({ from: callFrom }) => {
                this.setState({ callModal: 'active', callFrom });
            })
            .on('call', (data) => {
                if (data.sdp) {
                    this.pc.setRemoteDescription(data.sdp);
                    if (data.sdp.type === 'offer') this.pc.createAnswer();
                } else this.pc.addIceCandidate(data.candidate);
            })
            .on('end', this.endCall.bind(this, false))
            .emit('init');
    }

    startCall(isCaller, friendID, config) {
        console.log("Call Started")
        this.setState({ startTime: new Date() })
        this.config = config;
        this.pc = new PeerConnection(friendID)
            .on('localStream', (src) => {
                const newState = { callWindow: 'active', localSrc: src };
                if (!isCaller) newState.callModal = '';
                this.setState(newState);
            })
            .on('peerStream', (src) => this.setState({ peerSrc: src }))
            .start(isCaller);
        if (this.state.callFrom !== '') {
            this.props.videoCallFunc(this.state.startTime, this.state.endTime, this.state.callFrom)
        }
    }

    rejectCall() {
        console.log("Call Rejected");
        const { callFrom } = this.state;
        socket.emit('end', { to: callFrom });
        this.setState({ callModal: '' });
    }

    endCall(isStarter) {
        console.log("Call Ended");
        this.setState({ endTime: new Date() })
        if (_.isFunction(this.pc.stop)) {
            this.pc.stop(isStarter);
        }
        this.pc = {};
        this.config = null;
        this.setState({
            callWindow: '',
            callModal: '',
            localSrc: null,
            peerSrc: null
        });
    }

    videoCallStart() {
        if (this.state.callFrom !== '') {
            let ele = document.getElementById('videoCall');
            let ele1 = document.getElementById('btn-vc');
            if (ele !== null || ele1 !== null) {
                ele1.click()
            }
        }else{
            console.log("Not Called Modal")
        }
    }

    componentDidUpdate(){
        this.videoCall()
    }


    render() {
        const { callFrom, callModal, callWindow, localSrc, peerSrc } = this.state;

        return (
            <>
                <div className="navLinks" data-toggle="modal" id='btn-vc' data-target="#videoCall" data-backdrop="static" data-keyboard="false" style={{ display: "none" }}>Video Call</div>
                <div className="modal fade vmWidth" id="videoCall" tabIndex={-1} role="dialog" aria-labelledby="videoCallTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='video-page' id='show-video' >
                                    <div className='video-call'>
                                        <MainWindow startCall={this.startCallHandler} astroId={this.props.id} />
                                        {!_.isEmpty(this.config) && (
                                            <CallWindow
                                                status={callWindow}
                                                localSrc={localSrc}
                                                peerSrc={peerSrc}
                                                config={this.config}
                                                mediaDevice={this.pc.mediaDevice}
                                                endCall={this.endCallHandler}
                                            />
                                        )}
                                        <CallModal
                                            status={callModal}
                                            startCall={this.startCallHandler}
                                            rejectCall={this.rejectCallHandler}
                                            callFrom={callFrom}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );

    }
}

export default VideoCall;
