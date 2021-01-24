import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 90vw;
`

export const Wrapper = styled.div`
  background: #2a2b2f;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 4px 10px 25px 3px rgba(0, 0, 0, 0.61);
  overflow: hidden;
  width: 90vw;
  margin: 20px 0 ;
  
`

export const Scroll = styled.div`
  overflow: auto;
  height: 500px;
`

export const Table = styled.table`
  color: #fff;
  border-collapse: collapse;
  border-radius: 20px;
  width: 100%;


  th {
    text-align: center;
    padding: 15px;
    background: #2a2b2f;
  }

  td {
    border: 1px solid #3e4345;
    padding: 15px;
  }

  thead tr th {
    position: sticky;
    top: 0;
  }
`
export const Thead = styled.thead`
  color: #9f9d9d;
  border-bottom: 2px solid white;
`

export const Theader = styled.th`
  transition: .2s ease;
  cursor: pointer;

  span {
    padding-left: 5px;
  }

  &:hover {
    background: #47477e;
  }

  &:first-child {
    display: flex;
    align-items: center;
  }

`
export const BodyRow = styled.tr`
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    background: #3e4345;
  }


`

export const DataDesc = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  //width: 100%;
  max-width: 200px;

  &:not(:last-child) {
    margin-right: 10px;
    background: red;
  }
`

export const Control = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin: 10px 0;
  }
`

export const CurrentPage = styled.span`
  color: #6262c1;
`

export const Input = styled.input`
  border: none;
  outline: none;
  width: 40px;
  background: inherit;
  color: #6262c1;
  font-size: 16px;
  border-bottom: 2px solid #47477e;
`

export const Buttons = styled.div`
  display: flex;
`

export const Button = styled.button`
  transition: .2s ease;
  border: none;
  background: #47477e;
  color: #fff;
  padding: 5px;
  outline: none;
  cursor: pointer;

  &:active {
    background: #6262c1;
  }

  &:disabled {
    background: #9f9d9d;
  }
`

export const Select = styled.select`
  border: none;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  background: #3e4345;
  color: #fff;
  padding: 5px;
`

export const SelectedUser = styled.div`
  margin: 20px 0;
  color: #fff;
  position: relative;
  

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: #47477e;
    bottom: -10px;
    left: 0;
  }
`

export const Name = styled.div`

`
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span {
    margin-top: 10px;
    outline: none;
    border: none;
    background: #2a2b2f;
    padding: 10px;
    resize: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    max-width: 90vw;
  }
`
export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  

  div {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
`






