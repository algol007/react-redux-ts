import { RouteComponentProps } from 'react-router-dom';

// interface Props extends RouteComponentProps {}

const Table = (props:any) => {
    return (
        <div className="flex flex-col w-full">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  {props.children}
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Table