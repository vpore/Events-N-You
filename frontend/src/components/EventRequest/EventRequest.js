import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './EventRequest.css';

function EventRequest() {
  return (
    <>
        <div>
            <h2>Event Requests</h2>
            <hr></hr>
        </div>

        <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
            <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">Event Title</Popover.Header>
            <Popover.Body>
                <strong>Event Title</strong> Bicycle rights irony actually neutra typewriter lyft. Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick chia lo-fi. Occupy bitters pour-over snackwave you probably haven't heard of them small batch. Cornhole mustache man bun letterpress echo park VHS.
            </Popover.Body>
            </Popover>
        }
        >
        <Button variant="secondary" style={{width: "500px"}}>Event Name</Button>
        </OverlayTrigger>

        <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
            <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">Event Title</Popover.Header>
            <Popover.Body>
                <strong>Event Title</strong> Bicycle rights irony actually neutra typewriter lyft. Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick chia lo-fi. Occupy bitters pour-over snackwave you probably haven't heard of them small batch. Cornhole mustache man bun letterpress echo park VHS.
            </Popover.Body>
            </Popover>
        }
        >
        <Button variant="secondary" style={{width: "500px", marginTop: "10px"}}>Event Name</Button>
        </OverlayTrigger>

        <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
            <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">Event Title</Popover.Header>
            <Popover.Body>
                <strong>Event Title</strong> Bicycle rights irony actually neutra typewriter lyft. Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick chia lo-fi. Occupy bitters pour-over snackwave you probably haven't heard of them small batch. Cornhole mustache man bun letterpress echo park VHS.
            </Popover.Body>
            </Popover>
        }
        >
        <Button variant="secondary" style={{width: "500px", marginTop: "10px"}}>Event Name</Button>
        </OverlayTrigger>
    </>
  );
}

export default EventRequest;