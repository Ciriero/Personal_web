import styled from "styled-components";

export const WrapperProyects = styled.section`
  padding: 4rem 0rem;
  position: relative;
  .title-portfolio {
    text-align: center;
    margin-bottom: 5rem;
  }
  .udl {
    margin: 0 auto;
  }
  .intro-proyect {
    max-width: 50%;
    margin: 2rem auto;
  }
  .buttons {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5rem;
    
  }
  .claseb,
  .btn-proy {
    border: none;
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: var(--radius);
    background-color: var(--clr-grey-9);
    color: var(--clr-primary-5);
    transition: var(--transition);
    text-transform: capitalize;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    font-size: 1rem;
   
    cursor: pointer;
    :hover {
        background-color: var(--clr-white);
        border: 1px solid var(--clr-primary-5);
    }
  }
  .claseb{
      background-color: var(--clr-primary-5);
      color: var(--clr-white);
    }
`;

export const WrapperCenter = styled.div`
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  .card {
    margin-bottom: 2rem;
    background-color: var(--clr-primary-9);
    padding: 0.9rem;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .card-logo {
    background-color: var(--clr-grey-9);
  }
  .img-logo {
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
  }
  .card-info {
    text-align: center;
    h3 {
      font-size: 1rem;
      color: var(--clr-primary-3);
    }
  }
  img {
    border-radius: var(--radius);
  }
  h3 {
    margin-top: 1rem;
  }
`;

export const ButtonProyect = styled.button`
  padding: 0.3rem;
  border: none;
  border-radius: var(--radius);
  background-color: var(--clr-primary-6);
  color: var(--clr-white);
  transition: var(--transition);
  letter-spacing: 0.2rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  cursor: pointer;
  :hover{
    background-color: var(--clr-primary-4);
  }
`;
