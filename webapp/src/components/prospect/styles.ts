import styled from 'styled-components'

export const Div = styled.div`
  width: 94vw;
  height: auto;
  margin: 20px 3vw;
`

export const customStyles = {
  headRow: {
    style: {
      // override the row height
      height: '40px',
      minHeight: '40px',
      backgroundColor: '#444',
      color: '#fff',
    }
  },
  rows: {
    style: {
      minHeight: '40px',
    },
  },
  headCells: {
    style: {
      padding: '0px 10px',
    },
  },
  cells: {
    style: {
      padding: '0px 15px'
    },
  }
}