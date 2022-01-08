import './userList.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];


export default function UserList() {
    return (
        <div className='userList'>
            User list
        </div>
    )
}
