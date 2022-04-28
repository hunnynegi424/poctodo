import * as XLSX from 'xlsx';
import { getFromLocalStorage, saveInLocalStorage } from '../../common/utils';

const useActionPane = () => {

  const onExport = () => {
    const storedList = getFromLocalStorage('todo');
    if(storedList && storedList.length > 0) {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(storedList);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, 'MyTodoList.xlsx');
    }
  }

  const onClearList = () => {
    saveInLocalStorage('todo', []);
  }

  return {
    onExport,
    onClearList,
  }
}

export default useActionPane;