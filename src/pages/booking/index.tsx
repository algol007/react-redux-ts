import { RouteComponentProps } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar';
import Table from "../../components/Table"

interface Props extends RouteComponentProps {}

const Booking = ({ history }: Props) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-8 w-full">
                <h1 className="font-bold text-gray-400">Dashboard / Booking</h1>
                    <div className="flex mt-12">
                      <Table>
                      <thead className="bg-media">
                    <tr className="bg-red-500 text-white">
                      <th scope="col" className="pr-4 py-3 text-center text-xs font-bold uppercase tracking-wider">
                        #
                      </th>
                      <th scope="col" className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Facility
                      </th>
                      <th scope="col" className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Schedule
                      </th>
                      <th scope="col" className="relative pr-4 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        1
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ahmad Badrian
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        RS. Anutapura
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        14/3/2018 - 12:03
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      </td>
                    </tr>        
                  </tbody>

                      </Table>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Booking