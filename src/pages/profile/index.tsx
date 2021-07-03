import { RouteComponentProps } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar';

interface Props extends RouteComponentProps {}

const Profile = ({ history }: Props) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="p-8 w-full">
                <h1 className="font-bold text-gray-400">Dashboard / Profile</h1>
                    <div className="flex mt-12">
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile