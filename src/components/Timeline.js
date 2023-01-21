import React from "react";
import {
  WrapperTimeline,
  TimelineCenter,
  ItemCenter,
  TimelineContent,
} from "../styles/Timeline.styles";

const Timeline = () => {
  return (
    <WrapperTimeline>
      <div className="timeline-title">
        <h2>Timeline</h2>
        <div className="underline udl"></div>
      </div>
      <TimelineCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2015</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2016</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2017</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
        <ItemCenter>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <TimelineContent>
            <h3>Timeline Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloremque molestiae maiores a soluta consequatur fugiat illo
              reiciendis eligendi dicta alias voluptas illum modi, aspernatur
              quos, aperiam necessitatibus nulla error!
            </p>
          </TimelineContent>
        </ItemCenter>
      </TimelineCenter>
    </WrapperTimeline>
  );
};

export default Timeline;
