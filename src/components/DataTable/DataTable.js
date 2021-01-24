import React, { useEffect, useMemo } from 'react'
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table'
import { GROUPED_COLUMNS } from './Columns/Columns'
import Loader from '../Loader/Loader'
import Filter from '../Filter/Filter'
import Checkbox from './Checkbox/Checkbox'
import {
  Address,
  BodyRow,
  Button,
  Buttons,
  Container,
  Control,
  CurrentPage,
  DataDesc,
  Desc,
  Input,
  Name,
  Scroll,
  Select,
  SelectedUser,
  Table,
  Thead,
  Theader,
  Wrapper
} from './StyledTable'
import { useDispatch, useSelector } from 'react-redux'
import { getData, selectData, selectLoading } from '../../features/dataSlice'


const DataTable = () => {
  const data = useSelector(selectData)
  const isFetching = useSelector(selectLoading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const columns = useMemo(() => GROUPED_COLUMNS, [])


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    selectedFlatRows,
    state,
    setGlobalFilter,
  } = useTable({
      columns,
      data,
      initialState: {pageSize: 10},


    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',

          Header: ({getToggleAllPageRowsSelectedProps}) => (
            <div>
              <Checkbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({row}) => (                                          // чекбоксы для вывода информации под таблицей
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  console.log(isFetching)

  const {globalFilter, pageIndex, pageSize} = state
  return (
    <>
      {!isFetching ? (
        <Container>
          <Wrapper>
            <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
            <Scroll>
              <Table  {...getTableProps()}>
                <Thead>
                  {headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <Theader  {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          <span>
                    {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                  </span>
                        </Theader>   // Вывод всех заголовков
                      ))}
                    </tr>
                  ))}

                </Thead>
                <tbody  {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row)
                  return (                                                // Вывод всех строк
                    <BodyRow {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td  {...cell.getCellProps()}>
                          <DataDesc> {cell.render('Cell')}</DataDesc>
                        </td>                                           // Вывод всех ячеек
                      })}
                    </BodyRow>
                  )
                })}
                </tbody>
              </Table>
            </Scroll>

            <Control>
            <span>
              Страница{' '}
              <strong>
                <CurrentPage>{pageIndex + 1}</CurrentPage> из {pageOptions.length}
              </strong> {''}
            </span>

              <span>
           Переход на страницу:{' '}
                <Input type="number"
                       defaultValue={pageIndex + 1}
                       onChange={e => {
                         const page = e.target.value ? Number(e.target.value) - 1 : 0
                         gotoPage(page)
                       }}
                />
        </span>{' '}
              <Buttons>
                <Button onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>{'<<'}</Button>
                <Button onClick={() => previousPage()}
                        disabled={!canPreviousPage}>{'<'}</Button>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</Button>
                <Button onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>{'>>'}</Button>
              </Buttons>

              <Select value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value))
                      }}
              >
                {[5, 10, 15, 25,].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Показать {pageSize}
                  </option>
                ))}
              </Select>
            </Control>

          </Wrapper>


          {selectedFlatRows.map(d => {
            console.log(d.original)
            return (
              <SelectedUser key={d.original.id}>
                <Name>
                  Выбран пользователь <b>{d.original.firstName} {d.original.lastName}</b>
                </Name>
                <Desc>
                  Описание:
                  <span>{d.original.description}</span>
                </Desc>
                <Address>

                  <div>
                    Адрес проживания: <b>{d.original.adress.streetAddress}</b>
                  </div>
                  <div>
                    Город: <b>{d.original.adress.city}</b>
                  </div>
                  <div>
                    Провинция/штат: <b>{d.original.adress.state}</b>
                  </div>
                  <div>
                    Индекс: <b>{d.original.adress.zip}</b>
                  </div>
                </Address>
              </SelectedUser>
            )
          })
          }
        </Container>
      ) : <Loader/>}

    </>


  )
}

export default DataTable
