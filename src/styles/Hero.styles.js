import styled from "styled-components";

export const HeroContainer = styled.header`
  background-color: var(--clr-primary-9);
  transition: 1s all ease;
`;

export const HeroCenter = styled.div`
  width: 90vw;
  margin: 0rem auto;
  max-width: 1170px;
  margin-top: 5rem;
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  .hero-img {
    display: none;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background-color: var(--clr-primary-5);
   
  }
  .hero-info {
    h1 {
      color: var(--clr-primary-2);
      transition: 1s all ease;
    }
    h4 {
      margin-bottom: 0.5rem;
      letter-spacing: 0.5rem;
      line-height: 2rem;
      color: var(--clr-primary-2);
      transition: 1s all ease;
    }
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    .hero-photo {
      max-width: 25rem;
      max-height: 30rem;
      object-fit: cover;
      border-radius: var(--radius);
      position: relative;
    }
    .hero-img {
      display: block;
      position: relative;
      border-radius: var(--radius);
      border: 2px solid var(--clr-primary-2);
    }
  }
`;

export const HeroButton = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: var(--radius);
  margin: 3rem 0rem;
  :hover {
    background-color: var(--clr-primary-9);
  }
`;

export const HeroSocial = styled.div`
  font-size: 1.5rem;

  svg {
    margin-right: 2rem;
    margin-top: 3rem;
    cursor: pointer;
    color: var(--clr-primary-1);
    transition: 0.5s all ease;
    :hover {
      color: var(--clr-primary-5);
    }
  }
`;
