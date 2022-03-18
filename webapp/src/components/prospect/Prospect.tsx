import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { customStyles, Div } from './styles';

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Mail',
    selector: row => row.mail,
    sortable: true,
  },
  {
    name: 'Birthdate',
    selector: row => row.birthdate,
    sortable: true
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true
  }
]

export default function Prospect() {
  const prospects = useSelector((state: RootState) => state.prospect)

  return (
    <Div>
      <DataTable
        noDataComponent=""
        columns={columns}
        data={prospects}
        fixedHeader
        fixedHeaderScrollHeight='78vh'
        customStyles={customStyles}
        highlightOnHover
        striped

      />
    </Div>
  );
};