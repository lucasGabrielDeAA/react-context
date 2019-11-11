import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 20px 30px;
`;

export const Title = styled.p`
  color: #0b0b0b;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Content = styled.div`
  align-items: center;
  background: rgba(0, 1, 1, 0.1);
  box-shadow: 5px 10px 18px rgba(226, 226, 226, 0.7);
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: auto;
  padding-top: 12px;
  width: 700px;
`;
