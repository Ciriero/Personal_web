import styled from "styled-components";

export const WrapperAbout = styled.div`
  transition: 1s all ease;
  padding-top: 5rem;
  .about {
    max-width: 1170px;
    width: 80vw;
    margin: 0 auto;
  }
`;

export const AboutCenter = styled.div`
  display: grid;
  gap: 3rem;
  .about-img {
    justify-self: center;
  }
  .about-photo {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
    border: 2px solid var(--clr-primary-2);
  }
  .about-title {
    margin-bottom: 2rem;
    text-align: left;
  }
`;
