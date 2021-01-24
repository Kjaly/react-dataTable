import styled from 'styled-components'

export const Styles = styled.div`
  background: #3e4345;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  width: 100%;
  
  .filter__input{
    flex:.8;
    max-width: 400px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 10px;
    img{
      object-fit: contain;
      height: 20px;
      flex:.1;
    }
    input{
      font-size: 16px;
      border: none;
      outline: none;
      padding: 5px;
      flex: .7;
      width: 100px;
    }
    button{
      border: none;
      background: #2a2b2f;
      color: #fff;
      height: 40px;
      margin-right: -15px;
      border-radius: 0 10px 10px 0;
      flex:.2;
      outline: none;
      cursor: pointer;
      transition: .2s ease;

      &:hover{
        background: #17171a;
      }
      &:active{
        background: #47477e;
      }
    }
  }
`
