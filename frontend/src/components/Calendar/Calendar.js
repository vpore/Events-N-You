import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

function Calendar() {

    const [myEvents, setEvents] = React.useState([]);

    const data = [{
        start: new Date(2022, 6, 19),
        end: new Date(2022, 6, 20),
        title: 'CSI TechNext',
        allDay: true,
        color: 'red'
      },
      {
        start: new Date(2022, 6, 22),
        end: new Date(2022, 6, 22),
        title: 'CodeStorm Technical Hunt',
        allDay: true,
        color: 'blue'
      },
      {
        start: new Date(2022, 6, 19),
        end: new Date(2022, 6, 20),
        title: 'CSI TechNext',
        allDay: true,
        color: 'red'
      }]

    React.useEffect(() => {
        setEvents(data);
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);

    const responsive = {
        xsmall: {
            view: {
                calendar: {
                    type: 'week'
                },
                agenda: {
                    type: 'day'
                }
            }
        }
    }

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
    ); 
}

export default Calendar;