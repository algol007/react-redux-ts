import { RouteComponentProps } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar';

interface Props extends RouteComponentProps {}

const User = ({ history }: Props) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-8">
                    <h1 className="text-5xl font-bold">Ini User</h1>
                </main>
            </div>
        </>
    )
}

export default User