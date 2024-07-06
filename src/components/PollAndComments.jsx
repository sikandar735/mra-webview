import React, { useState, useEffect } from 'react';
import { ProgressBar, Button, Modal } from 'react-bootstrap';

const PollingComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [pollData, setPollData] = useState({ education: 0, health: 0, agriculture: 0 });
    const [totalVotes, setTotalVotes] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [pollEnded, setPollEnded] = useState(false);
    const [pollEndTime, setPollEndTime] = useState(Date.now() + 24 * 60 * 60 * 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Date.now() >= pollEndTime) {
                setPollEnded(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [pollEndTime]);

    const handleVote = () => {
        if (selectedOption) {
            setPollData(prevData => ({
                ...prevData,
                [selectedOption]: prevData[selectedOption] + 1,
            }));
            setTotalVotes(totalVotes + 1);
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    const renderPollOptions = () => (
        <div className="poll-options">
            {['education', 'health', 'agriculture'].map(option => (
                <div key={option} className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="pollOption"
                        id={option}
                        value={option}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                </div>
            ))}
        </div>
    );

    const renderPollResults = () => (
        <div className="poll-results mt-3">
            {['education', 'health', 'agriculture'].map(option => (
                <div key={option} className="poll-result">
                    <strong>{option.charAt(0).toUpperCase() + option.slice(1)}:</strong>
                    <ProgressBar
                        now={(pollData[option] / totalVotes) * 100}
                        label={`${((pollData[option] / totalVotes) * 100).toFixed(2)}%`}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="container mt-5">
            <div className="polling-component p-4 bg-light rounded">
                <h3 className="mb-3">Milton Resident Association Poll</h3>
                {pollEnded ? (
                    <div className="alert alert-info">The poll has ended. Thank you for your participation!</div>
                ) : (
                    <div>
                        <div className="poll-question mb-4">
                            <h5>What's the most important issue to you?</h5>
                            {renderPollOptions()}
                        </div>
                        <Button className='custom-hover-btn border border btn btn-danger custom-hover-btn' onClick={handleVote}>
                            Submit Vote
                        </Button>
 
                        {renderPollResults()}
                    </div>
                )}
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your vote has been recorded.</Modal.Body>
                <Modal.Footer>
                    <Button className='global-btn border border btn btn-light' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="comments-section mt-5 mb-5">
                <h4>Leave a Comment</h4>
                <form className="mt-3">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Postal Address" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="3" placeholder="Your Comment"></textarea>
                    </div>
                    <Button className="secondary-common-polling-button" type="submit">
                        Submit Comment
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PollingComponent;
