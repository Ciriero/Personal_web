import styled from "styled-components";

export const WrapperTimeline = styled.section`
  background-color: var(--clr-primary-9);
  padding: 3rem 0rem;
  .timeline-title {
    text-align: center;
    margin-bottom: 5rem;
    .udl {
      margin: 1rem auto;
    }
  }
`;

export const TimelineCenter = styled.div`
  max-width: 1170px;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: var(--clr-grey-3);
    left: 7px;
  }
`;

export const ItemCenter = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  width: 100%;
  :last-child {
    margin-bottom: 0;
  }
  :nth-child(odd) {
    padding-right: 0;
    text-align: left;
  }
  :nth-child(even) {
  }
  .timeline-dot {
    height: 1rem;
    width: 1rem;
    background-color: #f55050;
    box-shadow: 0 0 0 3px #f48484;
    position: absolute;
    border-radius: 50%;
    top: -0.4rem;
    left: 0;
  }
  .timeline-date {
    font-size: 1rem;
    font-weight: bold;
    color: var(--clr-primary-3);
    margin: -0.6rem 2rem 1rem;
  }
`;

export const TimelineContent = styled.div`
  background-color: var(--clr-primary-7);
  padding: 2rem;
  border-radius: 5px;
  margin-left: 2rem;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
  h3 {
    font-size: 1.5rem;
    color: var(--clr-white);
    text-transform: capitalize;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 22px;
    color: var(--clr-grey-4);
    font-style: italic;
  }
`;
