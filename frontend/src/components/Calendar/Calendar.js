import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import { getreq } from '../../api';

function Calendar() {

    getreq();
    
    // const eventsdata = getreq();
    //console.log(typeof data);

    const [myEvents, setEvents] = React.useState([]);

    // const data = eventsdata.map((eachdata) => ({
    //     start: new Date(eachdata.sdate),
    //     end: new Date(eachdata.edate),
    //     title: eachdata.evename,
    //     color: 'red'
    // }) )

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