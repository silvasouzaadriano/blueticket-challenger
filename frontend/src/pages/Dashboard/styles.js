import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  padding: 50px 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    button {
      align-items: center;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      display: flex;
      font-size: 14px;
      font-weight: bold;
      height: 44px;
      justify-content: space-between;
      margin: 5px 0 0;
      padding: 0 20px;
      transition: background 0.2s;
      svg {
        margin-right: 10px;
      }
      &:hover {
        background: ${darken(0.03, '#0000ff')};
      }
    }
    strong {
      color: #fff;
      font-size: 24px;
    }
  }
  footer {
    align-self: center;
    align-items: center;
    display: flex;
    margin-top: 30px;
    button {
      background: none;
      border: 0;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const EventCard = styled.div`
  & + div {
    margin-top: 10px;
  }
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 30px;
  border-radius: 5px;
  a {
    align-content: center;
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    strong {
      font-size: 18px;
    }
    strong,
    span {
      width: 70%;
    }
    time {
      font-size: 12px;
    }
  }
`;
export const NoEvents = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 20px;
  span {
    font-size: 18px;
    font-stretch: bold;
    margin-top: 15px;
  }
`;
